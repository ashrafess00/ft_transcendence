# Generated by Django 4.2.9 on 2024-02-07 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playerauth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='playerdata',
            name='testField',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]