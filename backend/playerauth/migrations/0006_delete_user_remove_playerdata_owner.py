# Generated by Django 4.2.9 on 2024-01-27 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playerauth', '0005_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
        migrations.RemoveField(
            model_name='playerdata',
            name='owner',
        ),
    ]
