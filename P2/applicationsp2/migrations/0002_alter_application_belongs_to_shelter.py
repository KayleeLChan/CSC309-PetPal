# Generated by Django 4.2.7 on 2023-11-15 03:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("applicationsp2", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="application",
            name="belongs_to_shelter",
            field=models.IntegerField(),
        ),
    ]
