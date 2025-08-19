from django.http import JsonResponse

def lista_articulos(request):

    # Ejemplo de  articulos --

    articulos = [
        {
            "id": 1,
            "titulo": "Conceptos Ingles",
            "descripcion": "Conceptos basicos de Ingles para entrevistas",
            "autor": "Marina Villegas",
            "fecha": "2025-08-19",
            "imagen": "https://picsum.photos/seed/articulo1/600/400"
        },
        {
            "id": 2,
            "titulo": "Introduccion a React con Django",
            "descripcion": "Exploramos cómo conectar React con Django paso a paso.",
            "autor": "Benjamin Baigorria",
            "fecha": "2025-08-18"
        },
        {
            "id": 3,
            "titulo": "Todo Sobre Criptomonedas",
            "descripcion": "Comienza a gestionar tu propia Billetera virtual.",
            "autor": "Benjamin Baigorria",
            "fecha": "2025-08-18"
        },
        {
            "id": 4,
            "titulo": "Clave para entender varios idiomas",
            "descripcion": "5 Conceptos clave para entender.",
            "autor": "Marina Villegas",
            "fecha": "2025-08-18"
        },
        {
            "id": 5,
            "titulo": "Introduccion a la Programacion",
            "descripcion": "Conceptso Basicos.",
            "autor": "Benjamin Baigorria",
            "fecha": "2025-08-18"
        },
        {
            "id": 2,
            "titulo": "Introduccion a React con Django",
            "descripcion": "Exploramos cómo conectar React con Django paso a paso.",
            "autor": "Benjamin Baigorria",
            "fecha": "2025-08-18"
        },
    ]
    return JsonResponse(articulos, safe=False)
