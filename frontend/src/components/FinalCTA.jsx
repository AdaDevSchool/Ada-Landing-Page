import React from 'react';

const FinalCTA = ({
  title = "Comienza Tu Viaje de Aprendizaje Hoy",
  description = "Únete a cientos de estudiantes que ya están transformando sus carreras y vidas con nuestros cursos.",
  primaryButtonText = "Ver Todos los Cursos",
  secondaryButtonText = "Suscribite al Plan Básico Gratis",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  gradientFrom = "from-blue-600",
  gradientTo = "to-blue-800"
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onPrimaryClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium hover:shadow-lg"
          >
            {primaryButtonText}
          </button>
          <button 
            onClick={onSecondaryClick}
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700/50 transition-all duration-300 font-medium hover:shadow-lg"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;