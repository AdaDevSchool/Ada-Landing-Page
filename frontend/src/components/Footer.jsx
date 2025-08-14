import React from 'react';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">AD</div>
              <span className="ml-3 font-bold text-xl text-white">ADA Devs School</span>
            </div>
            <p className="mb-6">
              La plataforma líder para aprender programación, idiomas, y finanzas con cursos prácticos y de alta calidad premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors duration-300">Cursos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors duration-300">Precios</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contáctanos</a></li>
            </ul>
          </div>
          
          {/* Categorías */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Categorías</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Programación Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Inglés Profesional</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Ciencia de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Desarrollo Móvil</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blockchain</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Trading</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-blue-600" />
                <span>Gran Canaria - España , San Luis - Argentina</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="mt-1 mr-3 text-blue-600" />
                <span>+54 (2664) 950045</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-blue-600" />
                <span>info@adadevsschool.com</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faGlobe} className="mt-1 mr-3 text-blue-600" />
                <span>www.adaDevsSchool.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 ADA Devs School. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;