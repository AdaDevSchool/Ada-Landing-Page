from django.db import models
from django.conf import settings # Configuracion para el modelo de usuario

# Create your models here.

""" class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    content = models.TextField(verbose_name="Contenido")
    published_date = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Publicación")
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, # Referencia a tu modelo de usuario personalizado
        on_delete=models.CASCADE,
        related_name='blog_posts',
        verbose_name="Autor"
    )

    image = models.ImageField(upload_to='blog_images/', blank=True, null=True, verbose_name='Imagen')

    class Meta:
        verbose_name = "Entrada de Blog"
        verbose_name_plural = "Entradas de Blog"
        ordering = ['-published_date'] # Ordena los posts por fecha de forma descendente

    def __str__(self):
        return self.title  """




class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
