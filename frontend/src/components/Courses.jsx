// src/components/Courses.jsx
import React from 'react';
import ScrollLetterByLetter from './ScrollLetterByLetter';

// Datos de ejemplo, que obtendrías de tu API de Django
const coursesData = [
    {
        id: 1,
        title: "Python Basico a Profesional",
        tag: "Python",
        price: "29",
        rating: 4.8,
        reviews: 1245,
        description: "Domina Python, el lenguaje mas utilizado en ramas como la Ciencia de Datos y la IA...",
        hours: 32,
        class: "course-container-one"
    },
    {
        id: 2,
        title: "Inglés para Principiantes",
        tag: "Inglés",
        price: "39",
        rating: 4.9,
        reviews: 2147,
        description: "Con este curso completo podras dominar el inglés en contextos basicos...",
        hours: 48,
        class: "course-container-two"
    },
    {
        id: 3,
        title: "Python para Ciencia de Datos",
        tag: "Python",
        price: "49",
        rating: 4.6,
        reviews: 987,
        description: "Aprende a usar Python para análisis de datos, visualización y machine learning...",
        hours: 56,
        class: "course-container-three"
    },
];

const CourseCard = ({ course }) => (
    <div className="course-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
        <div className={`${course.class} h-48 relative`}>
            <div className="absolute top-4 right-4 bg-white text-primary text-sm font-bold px-3 py-1 rounded-full">
                {course.id === 1 ? "Nuevo" : course.id === 2 ? "Popular" : ""}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">{course.tag}</span>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{course.title}</h3>
                    <div className="flex items-center text-yellow-400 mb-2">
                        {Array.from({ length: Math.floor(course.rating) }).map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                        {course.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                        <span className="text-gray-500 ml-2">{course.rating} ({course.reviews})</span>
                    </div>
                </div>
                <span className="text-2xl font-bold text-primary">${course.price}</span>
            </div>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                    <i className="far fa-clock mr-2"></i>
                    <span>{course.hours} horas</span>
                </div>
                <button className="bg-primary px-4 py-2 rounded-lg hover:bg-secondary transition text-sm">
                    Comprar Curso
                </button>
            </div>
        </div>
    </div>
);

const Courses = () => {
    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="split text-center mb-16">
                    <ScrollLetterByLetter>
                        Cursos Destacados
                    </ScrollLetterByLetter>

                    <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestros cursos más populares</p>
                    {/* <h2 className="text-3xl font-bold text-dark mb-4">Cursos Destacados</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestros cursos más populares</p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
                        Ver Todos los Cursos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;