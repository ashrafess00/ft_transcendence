# Generated by Django 4.2.9 on 2024-02-07 18:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('playerauth', '0002_playerdata_testfield'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playerdata',
            name='testField',
        ),
        migrations.AddField(
            model_name='playerdata',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='player_data', to=settings.AUTH_USER_MODEL),
        ),
    ]