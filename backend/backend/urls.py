"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Autenticacion (login, logaut, registro, etc.)
    path('api/auth/', include('dj_rest_auth.urls')), # login, logout, password reset
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),# registro
    path('api/', include(router.urls)),
    
]


# ENDPOINTS BASICOS FUNCIONANDO
# api/auth/login  -- para logearse
# api/auth/logout -- para deslogearse
# api/auth/registration -- para registrarse
# api/auth/user -- para obtener los datos del usuario registrado
