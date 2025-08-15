// src/components/Hero.jsx
import React from 'react';
import ScrollLetterByLetter from './ScrollLetterByLetter';

const Hero = () => {
    return (
        <section className="hero-pattern pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="smd:w-1/2 mb-12 md:mb-0">


                    {/* <section key={i} className="content-section" style={{ height: '100vh' }}>
                        <ScrollLetterByLetter delay={40 + (i * 10)} triggerOffset={0.1}>
                            {`Título Sección ${i + 1} con efecto de scroll`}
                        </ScrollLetterByLetter>
                        <p>Contenido de la sección {i + 1}...</p>
                    </section> */}
                        {/* <ScrollLetterByLetter>
                            DOMINA Programacion */}
                           <h1 className="split text-4xl md:text-5xl font-bold text-dark mb-6">
                            Domina 
                            <span className="text-primary"> Programación</span>, 
                            <span className="text-primary"> Finanzas </span> e 
                            <span className="text-primary"> Idiomas</span>
                            <p className="text-gray-600 text-lg mb-8">
                                Aprende de manera rapida y eficiente
                            </p>
                            </h1> 
                        {/* </ScrollLetterByLetter> */}
                        

                       
                        
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scala-105">
                                Comenzar Ahora
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scala-105">
                                Ver Cursos
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="ball">
                                <div className="circle" style={{ '--clr': 'pink' }}></div>
                                <div className="circle" style={{ '--clr': 'blue' }}></div>
                                <div className="circle" style={{ '--clr': 'white' }}></div>
                                <div className="circle" style={{ '--clr': 'grey' }}></div>
                                <div className="circle" style={{ '--clr': 'rgb(81, 0, 161)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;