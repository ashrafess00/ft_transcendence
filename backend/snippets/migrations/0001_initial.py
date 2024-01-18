# Generated by Django 4.2.9 on 2024-01-16 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Snippet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('code', models.TextField()),
                ('language', models.CharField(choices=[('en', 'English'), ('ar', 'Arabic'), ('sp', 'Spanigsh')], default='English', max_length=100)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]
