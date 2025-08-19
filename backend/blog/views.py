from django.http import JsonResponse

def lista_articulos(request):
    articulos = [
        {
            "id": 1,
            "titulo": "Primer artículo en el blog",
            "descripcion": "Este es un artículo de prueba sin base de datos.",
            "autor": "Admin",
            "fecha": "2025-08-19"
        },
        {
            "id": 2,
            "titulo": "Segundo artículo",
            "descripcion": "Exploramos cómo conectar React con Django paso a paso.",
            "autor": "Benjamin",
            "fecha": "2025-08-18"
        },
    ]
    return JsonResponse(articulos, safe=False)
