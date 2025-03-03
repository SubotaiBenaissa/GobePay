from rest_framework.serializers import ModelSerializer
from history.models import History
from user.serializers import UsersInfoSerializer

class HistorySerializer(ModelSerializer):
    
    origin_user = UsersInfoSerializer()
    target_user = UsersInfoSerializer()
    
    class Meta:
        
        model = History
        fields = ['id', 'type', 'origin_user', 'target_user', 'amount', 'message', 'created_at']
