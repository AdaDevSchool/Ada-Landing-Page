import React from 'react';
import { 
  faVideo, 
  faChalkboardTeacher, 
  faLaptopCode, 
  faMobileAlt 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesSection = () => {
  // Datos de las características
  const features = [
    {
      id: 1,
      icon: faVideo,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-100',
      title: 'Cursos de Alta Calidad',
      description: 'Contenido actualizado constantemente con las últimas tecnologías y metodologías de enseñanza.'
    },
    {
      id: 2,
      icon: faChalkboardTeacher,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100',
      title: 'Profesores Expertos',
      description: 'Instructores y traductores con experiencia real en la industria que comparten su conocimiento práctico.'
    },
    {
      id: 3,
      icon: faLaptopCode,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-100',
      title: 'Aprendizaje Práctico',
      description: 'Proyectos reales y ejercicios prácticos que te preparan para el mundo laboral, también acompañados de un modelo de negocio, para darle impulso a tu emprendimiento.'
    },
    {
      id: 4,
      icon: faMobileAlt,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      title: 'Acceso Multiplataforma',
      description: 'Aprende desde cualquier dispositivo: computadora, tablet o teléfono móvil.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Qué Elegirnos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre lo que hace de ADA Devs School una de las mejores plataformas para tu aprendizaje
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card bg-gray-50 rounded-xl p-6 transition duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className={`${feature.iconColor} text-2xl`} 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;