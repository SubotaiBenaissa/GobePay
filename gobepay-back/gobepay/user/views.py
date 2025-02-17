import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.serializers import UserRegisterSerializer

# Create your views here.

class RegisterView(APIView):
    
    def post(self, request):
        
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)