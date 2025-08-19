from django.http import JsonResponse



    # Ejemplo de  articulos --

ARTICULOS = [
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
            "fecha": "2025-08-18",
            "imagen": "https://picsum.photos/seed/articulo2/1200/600"
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
            "id": 6,
            "titulo": "Introduccion a React con Django",
            "descripcion": "Exploramos cómo conectar React con Django paso a paso.",
            "autor": "Benjamin Baigorria",
            "fecha": "2025-08-18"
        },
]


# Lista de articulos 
def lista_articulos(request):
    return JsonResponse(ARTICULOS, safe=False)

# Articulo individual
def detalle_articulo(request, id):
    articulo = next((a for a in ARTICULOS if a["id"] == id), None)
    if articulo:
        return JsonResponse(articulo, safe=False)
    return JsonResponse({"error": "Artículo no encontrado"}, status=404)
