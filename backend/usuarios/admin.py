# usuarios/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    # La solución es redefinir completamente los 'fieldsets' para que
    # no incluyan campos relacionados con el username.
    
    # Estos son los campos que se mostrarán al editar un usuario existente.
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Información Personal', {'fields': ('first_name', 'last_name')}),
        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Fechas Importantes', {'fields': ('last_login', 'date_joined')}),
    )

    # Estos son los campos para crear un nuevo usuario.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password', 'password2')}
        ),
    )

    # Definimos las columnas que se muestran en la lista del admin
    list_display = ['email', 'is_staff', 'is_active']
    # Definimos los campos por los que se puede buscar
    search_fields = ['email']
    # Ordenamos la lista de usuarios por email
    ordering = ['email']

    # Eliminamos el campo 'username' de los fieldsets
    # ya que no existe en tu modelo.
    # El UserAdmin por defecto lo esperaría, por eso lo sobreescribimos.

admin.site.register(CustomUser, CustomUserAdmin)