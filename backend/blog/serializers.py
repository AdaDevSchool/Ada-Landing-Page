# blog/serializers.py
from rest_framework import serializers
from .models import Post
""" from usuarios.serializers import CustomUserSerializer """

""" class PostSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer(read_only=True) # Revisar s ies correcto - esto sirve para que el aauto sea el usuairio  logueado pero esa no es la idea.

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'published_date', 'author', 'image']
        read_only_fields = ['author'] """



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'