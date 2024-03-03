# Generated by Django 4.2.9 on 2024-01-20 11:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('playerauth', '0003_playerdata_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playerdata',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='playerdata', to=settings.AUTH_USER_MODEL),
        ),
    ]
