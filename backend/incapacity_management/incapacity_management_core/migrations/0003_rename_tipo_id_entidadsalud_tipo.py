# Generated by Django 4.2.1 on 2023-11-12 01:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('incapacity_management_core', '0002_remove_entidadsalud_tipo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entidadsalud',
            old_name='tipo_id',
            new_name='tipo',
        ),
    ]
