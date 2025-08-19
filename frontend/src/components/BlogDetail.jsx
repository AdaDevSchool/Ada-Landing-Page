import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // obtiene el id de la URL
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/articulos/${id}/`)
      .then((res) => res.json())
      .then((data) => setArticulo(data))
      .catch((err) => console.error("Error al obtener el artículo:", err));
  }, [id]);

  if (!articulo) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <img
        src={articulo.imagen}
        alt={articulo.titulo}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{articulo.titulo}</h1>
      <div className="text-sm text-gray-500 mb-6">
        Por {articulo.autor} • {articulo.fecha}
      </div>
      <p className="text-lg leading-relaxed">{articulo.contenido}</p>
    </div>
  );
};

export default BlogDetail;
