from webapp.models import Task
from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api:task-detail')
    status_display = serializers.CharField(source='get_status_display')

    class Meta:
        model = Task
        fields = ('url', 'id', 'summary', 'description', 'due_date', 'status', 'status_display', 'time_planned')