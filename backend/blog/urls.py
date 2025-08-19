from django.urls import path
from .views import lista_articulos, detalle_articulo

urlpatterns = [
    path("api/articulos/", lista_articulos),
    path("api/articulos/<int:id>/", detalle_articulo),
]