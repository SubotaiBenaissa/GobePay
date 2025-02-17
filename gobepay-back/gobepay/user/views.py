import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.models import User
from user.serializers import UserRegisterSerializer

# Create your views here.

class RegisterView(APIView):
    
    def post(self, request):
        
        serializer = UserRegisterSerializer(data=request.data)             # Envío el cuerpo de request para el serializador  
        
        if serializer.is_valid(raise_exception=True):
            
            new_user = serializer.save()
            email_user = serializer.data['email']                          # Se crea el id de stripe a partir del email registrado
            user_stripe = stripe.Customer.create(email=email_user)         # Crea un nuevo usuario para stripe
            id_user_stripe = user_stripe.id                                # Extraigo el id del nuevo usuario creado de stripe
            user = User.objects.get(pk=new_user.id)                        # Extraigo el id del usuario que es su pk
            user.id_user_stripe = id_user_stripe                           # El id creado en stripe se asigna al id en la BD
            user.save()                                                    # Se guarda el nuevo user
            
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)