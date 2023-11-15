from django.shortcuts import get_object_or_404
from .models import Listing, ListingImage
from .serializers import ListingSerializer, ListingImageSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import PermissionDenied
from rest_framework.pagination import PageNumberPagination
import django_filters

>>>>>>> origin/kayleeIntegrate
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
    FILTER_STATUS_CHOICES = Listing.STATUS_CHOICES + [("all", "all")]
    name = django_filters.CharFilter(lookup_expr='icontains')
    location = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=FILTER_STATUS_CHOICES, initial='available', method='filter_status')
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

    def __init__(self, data=None, *args, **kwargs):
        # if filterset is bound, use initial values as defaults
        if data is not None:
            # get a mutable copy of the QueryDict
            data = data.copy()

            for name, f in self.base_filters.items():
                initial = f.extra.get('initial')

                # filter param is either missing or empty, use initial as default
                if not data.get(name) and initial:
                    data[name] = initial

        super().__init__(data, *args, **kwargs)

    def filter_status(self, queryset, name, value):
        if not value:
            return queryset.filter(status="available")
        elif value == "all":
            return queryset
        else:
            return queryset.filter(status=value)

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 30

# Create your views here.
class PetListingsListCreate(ListCreateAPIView):
    serializer_class = ListingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ListingFilter
    sort_by_fields = ['name', 'age']
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Listing.objects.all()
    
    def perform_create(self, serializer):
        if self.request.user.accounttype == "petseeker":
            raise PermissionDenied("Pet seekers cannot create pet listings")
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
        listing = get_object_or_404(Listing, id=self.kwargs['pk'])
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