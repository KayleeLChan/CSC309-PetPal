from django.shortcuts import get_object_or_404
from .models import Listing, ListingImage
from .serializers import ListingSerializer, ListingImageSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
import django_filters

class IsShelterOrReadOnly(BasePermission):
    """
    Object-level permission to only allow shelters of a listing to edit it.
    Assumes the model instance has a `shelter` attribute.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        
        if request.user.is_authenticated:
            if isinstance(obj, Listing):
                return obj.shelter == request.user
            elif isinstance(obj, ListingImage):
                return obj.listing.shelter == request.user
        else:
            return False
        
class ListingFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    location = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=Listing.STATUS_CHOICES)
    shelter = django_filters.NumberFilter()
    sort_by = django_filters.OrderingFilter(
        fields=(
            ('name', 'name'),
            ('age', 'age'),
        ),
        field_labels={
            'name': 'Name',
            'age': 'Age',
        }
    )

    class Meta:
        model = Listing
        fields = ['name', 'location', 'status', 'shelter']

# Create your views here.
class PetListingsListCreate(ListCreateAPIView):
    serializer_class = ListingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ListingFilter
    sort_by_fields = ['name', 'age']

    def get_queryset(self):
        return Listing.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(shelter=self.request.user)

class PetListingsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    serializer_class = ListingSerializer
    permission_classes = [IsShelterOrReadOnly]

    def get_object(self):
        obj = get_object_or_404(Listing, id=self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

class PetListingsImageCreate(CreateAPIView):
    serializer_class = ListingImageSerializer
    permission_classes = [IsShelterOrReadOnly]
    
    def perform_create(self, serializer):
        listing = get_object_or_404(Listing, id=self.kwargs['pk'], shelter=self.request.user)
        self.check_object_permissions(self.request, listing)
        serializer.save(listing=listing)

class PetListingsImageRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    serializer_class = ListingImageSerializer
    permission_classes = [IsShelterOrReadOnly]

    def get_object(self):
        obj = get_object_or_404(ListingImage, id=self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)