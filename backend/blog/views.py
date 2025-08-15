""" # blog/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, AllowAny
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            # Permite que cualquier usuario (incluso los no autenticados)
            # puedan ver la lista de posts y los detalles de un post.
            permission_classes = [AllowAny]
        else:
            # Restringe las acciones de creación, actualización y borrado
            # únicamente a los usuarios administradores.
            permission_classes = [IsAdminUser]
        
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        # Esta función asigna el usuario autenticado como autor del post
        serializer.save(author=self.request.user) """


from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class PostListView(generics.ListAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
