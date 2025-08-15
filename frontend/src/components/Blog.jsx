import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ScrollLetterByLetter from './ScrollLetterByLetter';

const Blog = () => {
  // Datos de los artículos del blog
  const blogPosts = [
    {
      id: 1,
      imageClass: 'blog-one',
      category: 'Programación',
      categoryColor: 'bg-blue-100 text-blue-800',
      date: '15 Julio, 2023',
      title: 'Las 10 habilidades de JavaScript fundamentales en el desarrollo Backend',
      description: 'Descubre qué habilidades en JavaScript son las más buscadas por las empresas este año y cómo puedes desarrollarlas.',
      link: '#'
    },
    {
      id: 2,
      imageClass: 'blog-two',
      category: 'Idiomas',
      categoryColor: 'bg-green-100 text-green-800',
      date: '10 Julio, 2023',
      title: 'Cómo mejorar tu pronunciación en inglés en 30 días',
      description: 'Técnicas comprobadas y ejercicios prácticos para mejorar significativamente tu pronunciación en inglés en solo un mes.',
      link: '#'
    },
    {
      id: 3,
      imageClass: 'blog-three',
      category: 'Finanzas',
      categoryColor: 'bg-purple-100 text-purple-800',
      date: '5 Julio, 2023',
      title: 'Consejos para seleccionar y configurar tu billetera virtual para criptomonedas',
      description: 'Pasos prácticos, consejos de profesionales y un plan',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog y Artículos</h2> */}
          <ScrollLetterByLetter>
            Blog y Articulos
          </ScrollLetterByLetter>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprende con nuestros artículos sobre programación, idiomas y desarrollo profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className={`${post.imageClass} h-56 border-2 border-gray-100 rounded-t-xl w-full`}></div>
              <div className="p-6">
                <div className="flex mb-4">
                  <span className={`${post.categoryColor} text-xs font-semibold px-3 py-1 rounded-full mr-3`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="blog-title text-xl font-bold text-gray-900 mb-3 transition duration-300 hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a href={post.link} className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                  Leer más
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium hover:border-blue-700 hover:text-blue-700">
            Ver Todos los Artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;