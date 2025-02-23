from rest_framework import serializers
from user.models import User
from wallet.serializers import WalletSerializer

class UserRegisterSerializer(serializers.ModelSerializer):
    
    class Meta: 
        
        model = User
        fields = ["id", "email", "username", "password"]
        
    def create(self, validated_data):                       # Se sobreescribe el método create del serializer
        
        password = validated_data.pop('password', None)     # Se elimina la clave plana del registro
        instance = self.Meta.model(**validated_data)        # Nueva instancia del modelo pasando el resto de validated_data y si no existe se asigna None
        if password is not None:
            instance.set_password(password)                 # Se hashea la contraseña
        instance.save()                                     # Se guarda la contraseña hasheada
        return instance                                     # Se devuelve la nueva instancia del modelo
    
class UserSerializer(serializers.ModelSerializer):
    
    wallet = WalletSerializer()                             # Asociar wallet al usuario
    
    class Meta: 
        
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'date_joined', 'wallet']
        
class UserUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = User
        fields = ['email', 'password', 'first_name', 'last_name']