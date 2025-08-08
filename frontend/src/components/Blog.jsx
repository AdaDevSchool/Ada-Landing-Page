// src/components/Blog.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente para un solo artículo
const BlogPostCard = ({ post }) => (
    <div className="blog-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
        <div className={`blog-${post.id} h-56 border-2 rounded-xl w-full`}></div>
        <div className="p-6">
            <div className="flex mb-4">
                <span className="bg-blue-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mr-3">{post.category}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h3 className="blog-title text-xl font-bold text-dark mb-3 transition duration-300">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <a href="#" className="text-primary font-semibold flex items-center">
                Leer más
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
        </div>
    </div>
);

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Aquí harías la llamada a tu API de Django
                const response = await axios.get('http://127.0.0.1:8000/api/posts/');
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Simulación de los datos del blog para el frontend
    const placeholderPosts = [
        { id: 1, category: 'Programación', date: '15 Julio, 2023', title: 'Las 10 habilidades de JavaScript fundamentales en el desarrollo Backend', summary: 'Descubre qué habilidades en JavaScript son las más buscadas por las empresas este año...' },
        { id: 2, category: 'Idiomas', date: '10 Julio, 2023', title: 'Cómo mejorar tu pronunciación en inglés en 30 días', summary: 'Técnicas comprobadas y ejercicios prácticos para mejorar significativamente tu pronunciación...' },
        { id: 3, category: 'Finanzas', date: '5 Julio, 2023', title: 'Consejos para seleccionar y configurar tu billetera virtual para criptomonedas.', summary: 'Pasos prácticos, consejos de profesionales y un plan' },
    ];

    if (loading) return <div>Cargando artículos...</div>;
    if (error) return <div>Error al cargar los artículos.</div>;

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-dark mb-4">Blog y Artículos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Aprende con nuestros artículos sobre programación, idiomas y desarrollo profesional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(posts.length > 0 ? posts : placeholderPosts).map(post => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
                        Ver Todos los Artículos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;