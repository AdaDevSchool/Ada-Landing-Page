import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articulos/") // tu endpoint en Django
      .then((res) => res.json())
      .then((data) => setArticulos(data))
      .catch((err) => console.error("Error al obtener artículos:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Últimos artículos</h2>
      <div className="grid gap-6">
        {articulos.map((articulo) => (
          <div
            key={articulo.id}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{articulo.titulo}</h3>
            <p className="text-gray-600 mb-3">{articulo.descripcion}</p>
            <div className="text-sm text-gray-500">
              Por {articulo.autor} • {articulo.fecha}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
