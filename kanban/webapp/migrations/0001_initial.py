# Generated by Django 2.1.7 on 2019-03-09 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('summary', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, max_length=2000, null=True)),
                ('due_date', models.DateField()),
                ('status', models.CharField(choices=[('todo', 'Очередь'), ('doing', 'В работе'), ('done', 'Сделано')], default='todo', max_length=20)),
                ('time_planned', models.DecimalField(blank=True, decimal_places=1, max_digits=2, null=True)),
            ],
        ),
    ]