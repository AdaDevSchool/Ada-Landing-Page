# usuarios/serializers.py
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from allauth.account.utils import get_adapter
from .models import CustomUser

# Serializer para el registro
class CustomRegisterSerializer(RegisterSerializer):
    # Sobreescribe el campo 'username' para eliminarlo de la validación
    # y de la interfaz del formulario.
    

    email = serializers.EmailField(label="Email")
    password = serializers.CharField(label="Contraseña", write_only=True)
    password2 = serializers.CharField(label="Confirmar Contraseña", write_only=True)
    username = None

    def validate(self, attrs):
        # Valida los datos como lo haría el serializer padre
        attrs = super().validate(attrs)
        
        # Asigna el email como el nombre de usuario. Esto es crucial.
        attrs['username'] = attrs.get('email')
        
        return attrs

# Serializer para los detalles del usuario
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name')
        read_only_fields = ('email',)