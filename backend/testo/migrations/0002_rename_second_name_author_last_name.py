# Generated by Django 4.2.10 on 2024-02-29 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='author',
            old_name='second_name',
            new_name='last_name',
        ),
    ]
