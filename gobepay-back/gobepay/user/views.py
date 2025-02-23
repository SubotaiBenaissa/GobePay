import stripe
import os
from dotenv import load_dotenv
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from user.models import User
from user.serializers import UserRegisterSerializer, UserSerializer, UserUpdateSerializer
from wallet.models import Wallet

# Create your views here.
load_dotenv()
stripe.api_key = os.environ['STRIPE_KEY']

class RegisterView(APIView):
    
    def post(self, request):
        
        wallet = Wallet(balance=0)
        wallet.save()
        
        serializer = UserRegisterSerializer(data=request.data)             # Envío el cuerpo de request para el serializador  
        
        if serializer.is_valid(raise_exception=True):                      # raise_exception para mostrar cualquier error emergente
            
            new_user = serializer.save()
            email_user = serializer.data['email']                          # Se crea el id de stripe a partir del email registrado
            user_stripe = stripe.Customer.create(email=email_user)         # Crea un nuevo usuario para stripe
            id_user_stripe = user_stripe.id                                # Extraigo el id del nuevo usuario creado de stripe
            user = User.objects.get(pk=new_user.id)                        # Extraigo el id del usuario que es su pk
            user.id_user_stripe = id_user_stripe                           # El id creado en stripe se asigna al id en la BD
            user.wallet = wallet                                           # Se asocia la wallet al usuario correspondiente              
            user.save()                                                    # Se guarda el nuevo user
            
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserMeView(APIView):
    
    permission_classes = [IsAuthenticated]                                 # Sólo si está autenticado se ejecuta
    
    def get(self, request):
        
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    def put(self, request):
        
        if 'password' in request.data:
            
            password = request.data['password']
            request.data['password'] = make_password(password)             # Se encripta la contraseña cambiada
            
        serializer = UserUpdateSerializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_200_OK)
        