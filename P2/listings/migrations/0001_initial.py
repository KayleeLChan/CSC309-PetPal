from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=50)),
                ('status', models.CharField(choices=[('available', 'available'), ('adopted', 'adopted'), ('pending', 'pending'), ('withdrawn', 'withdrawn')], max_length=10)),
                ('animal', models.CharField(max_length=50)),
                ('breed', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('size', models.IntegerField()),
                ('colour', models.CharField(max_length=50)),
                ('sex', models.CharField(choices=[('F', 'Female'), ('M', 'Male')], max_length=1)),
                ('personality', models.CharField(max_length=50)),
                ('health', multiselectfield.db.fields.MultiSelectField(choices=[('N/A', 'N/A'), ('vaccinated', 'vaccinated'), ('spayed/neutered', 'spayed/neutered')], max_length=28)),
                ('good_with', models.CharField(max_length=50)),
                ('good_without', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('shelter', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='listings', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ListingImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='listing_images/')),
                ('listing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='listings.listing')),
            ],
        ),
    ]
