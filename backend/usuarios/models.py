from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    # Campos extra opcionales
    email = models.EmailField(unique=True)  # hacemos que el email sea único
    nombre = models.CharField(max_length=150, blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    rol = models.CharField(max_length=50, choices=[
        ('alumno', 'Alumno'),
        ('admin', 'Administrador'),
    ], default='alumno')

    def __str__(self):
        return self.username
