import React from 'react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  // Datos de los testimonios
  const testimonials = [
    {
      id: 1,
      name: "María Rodríguez",
      rating: 5,
      hasHalfStar: false,
      comment: `"El curso de JavaScript me cambió la vida. En solo 6 meses pude cambiar de carrera y ahora trabajo como desarrolladora frontend en una gran empresa."`,
      avatarClass: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "Carlos Méndez",
      rating: 4.5,
      hasHalfStar: true,
      comment: `"El plan premium me ha permitido acceder a todos los cursos de programación e inglés. La calidad de los instructores es excepcional y la plataforma es muy fácil de usar."`,
      avatarClass: "bg-gradient-to-r from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "Laura Gómez",
      rating: 5,
      hasHalfStar: false,
      comment: `"Gracias a los cursos de inglés profesional pude mejorar mi nivel y conseguir un ascenso en mi trabajo. Los materiales son excelentes y las clases muy prácticas."`,
      avatarClass: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    {
      id: 4,
      name: "Juan Pérez",
      rating: 5,
      hasHalfStar: false,
      comment: `"Increíble metodología de enseñanza. Nunca había aprendido programación de manera tan efectiva y entretenida."`,
      avatarClass: "bg-gradient-to-r from-red-400 to-red-600"
    },
    {
      id: 5,
      name: "Ana Sánchez",
      rating: 4,
      hasHalfStar: false,
      comment: `"Los mentores siempre están disponibles para resolver dudas. La mejor inversión que he hecho en mi educación."`,
      avatarClass: "bg-gradient-to-r from-yellow-400 to-yellow-600"
    }
  ];

  // Componente para mostrar las estrellas
  const StarRating = ({ rating, hasHalfStar }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = hasHalfStar || rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={`full-${i}`} 
          icon={faStar} 
          className="text-yellow-400" 
        />
      );
    }
    
    if (hasHalf) {
      stars.push(
        <FontAwesomeIcon 
          key="half" 
          icon={faStarHalfAlt} 
          className="text-yellow-400" 
        />
      );
    }
    
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={`empty-${i}`} 
          icon={faStar} 
          className="text-gray-300" 
        />
      );
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Reseñas de Nuestros Estudiantes y Emprendedores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya están aprendiendo con nosotros
          </p>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-md p-6 h-full mx-2">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.avatarClass} border-2 border-white`}></div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <StarRating 
                        rating={testimonial.rating} 
                        hasHalfStar={testimonial.hasHalfStar} 
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controles de navegación */}
          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Paginación */}
          <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;