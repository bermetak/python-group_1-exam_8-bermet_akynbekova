from webapp.models import Task
from rest_framework import viewsets
from api.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('status', '-due_date')
    serializer_class = TaskSerializer
