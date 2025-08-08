// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Classes from './components/Classes';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
// Importa tus archivos CSS aquí
import '../static/css/main.css';
import '../static/css/animations.css';
import '../static/css/backgrounds.css';
import '../static/css/blog.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Courses />
            <Classes />
            <Blog />
            <Pricing />
            {/* Si tienes un footer, iría aquí */}
        </div>
    );
};

export default App;