// src/components/Classes.jsx
import React from 'react';
import ScrollLetterByLetter from './ScrollLetterByLetter';

// Datos de ejemplo, obtendrías de tu API de Django
const classesData = [
    {
        id: 1,
        title: "Clase Individual",
        tag: "Clase Personalizada",
        price: "14.99",
        rating: 4.8,
        reviews: 1245,
        description: "Este modelo expres de clase particular, solo para una persona, para poder abarcar...",
        hours: 1,
        class: "b-container-one"
    },
    {
        id: 2,
        title: "Paquete de Clases",
        tag: "Pack de Clases",
        price: "11.99",
        rating: 4.9,
        reviews: 2147,
        description: "Esta opcion sirve para cuando necesitar abordar temas complejos que requieran mas de 1 hora...",
        hours: "2 a 10",
        class: "b-container-two"
    },
    {
        id: 3,
        title: "Clases Grupales",
        tag: "Conjunto",
        price: "9.99",
        rating: 4.6,
        reviews: 987,
        description: "En caso de que sean 2 o mas personas, pueden solicitar el tipo de clase grupal...",
        hours: "2 a 10",
        class: "b-container-three"
    }
];

const ClassCard = ({ classItem }) => (
    <div className="course-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
        <div className={`${classItem.class} h-48 relative`}>
            <div className="absolute top-4 right-4 bg-white text-primary text-sm font-bold px-3 py-1 rounded-full">
                {classItem.id === 1 ? "Inicial" : classItem.id === 2 ? "Packs" : "Grupos"}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">{classItem.tag}</span>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{classItem.title}</h3>
                    <div className="flex items-center text-yellow-400 mb-2">
                        {Array.from({ length: Math.floor(classItem.rating) }).map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                        {classItem.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                        <span className="text-gray-500 ml-2">{classItem.rating} ({classItem.reviews})</span>
                    </div>
                </div>
                <span className="text-2xl font-bold text-primary">{classItem.price} U$D
                    <span className="text-gray-400">/hora</span>
                </span>
            </div>
            <p className="text-gray-600 mb-6">{classItem.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500">
                    <i className="far fa-clock mr-2"></i>
                    <span>{classItem.hours} hora{classItem.hours > 1 && 's'}</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition text-sm">
                    Reservar Clase
                </button>
            </div>
        </div>
    </div>
);

const Classes = () => {
    return (
        <section id="classes" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <ScrollLetterByLetter>
                        Clases Personalizadas
                    </ScrollLetterByLetter>
                    {/* <h2 className="text-3xl font-bold text-dark mb-4">Clases Personalizadas</h2> */}
                    <p className="text-gray-600 max-w-2xl mx-auto">Solicita ayuda rapida en el tema que tu quieras</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classesData.map(classItem => (
                        <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;