// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/images/logo/logo-w.jpg'; // Asegúrate de mover la imagen a la carpeta src/assets

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img className="img-logo" src={logo} alt="logo" />
                        <span className="ml-3 font-bold text-xl text-dark">ADA Dev School</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#inicio" className="nav-link text-gray-600 hover:text-primary transition">Inicio</a>
                        <a href="#courses" className="nav-link text-gray-600 hover:text-primary transition">Cursos</a>
                        <a href="#classes" className="nav-link text-gray-600 hover:text-primary transition">Clases</a>
                        <a href="/blog/" className="nav-link text-gray-600 hover:text-primary transition">Blog</a>
                        <a href="#pricing" className="nav-link text-gray-600 hover:text-primary transition">Precios</a>
                        <a href="#features" className="nav-link text-gray-600 hover:text-primary transition">Características</a>
                        <a href="#features" className="nav-link text-gray-600 hover:text-primary transition">Ejercicios</a>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <button className="hidden md:block text-gray-600 hover:text-primary transition">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                            Iniciar Sesión
                        </button>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                            Registrarse
                        </button>
                        <button className="md:hidden text-gray-600">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;