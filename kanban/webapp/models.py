from django.db import models

# Create your models here.

class Task(models.Model):
    TASK_STATUS_CHOICES = [
        ('todo', 'Очередь'),
        ('doing', 'В работе'),
        ('done', 'Сделано'),
    ]

    summary = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    due_date = models.DateField()
    status = models.CharField(max_length=20, choices=TASK_STATUS_CHOICES, default='todo')
    time_planned = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)

    def __str__(self):
        return self.summary
