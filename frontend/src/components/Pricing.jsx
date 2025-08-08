// src/components/Pricing.jsx
import React from 'react';

// Datos de ejemplo para los planes
const pricingPlans = [
    {
        id: 1,
        title: "Basico",
        price: "0",
        period: "/mes",
        isPopular: false,
        features: [
            { text: "Acceso a cursos básicos gratis", included: true },
            { text: "Certificados de finalización", included: false },
            { text: "Acceso a cursos premium", included: false },
            { text: "Proyectos prácticos", included: false },
            { text: "Soporte prioritario", included: false },
            { text: "Acessoramientos personales", included: false }
        ]
    },
    {
        id: 2,
        title: "Intermedio",
        price: "29",
        period: "/mes",
        isPopular: true,
        features: [
            { text: "Acceso a cursos básicos gratis", included: true },
            { text: "Certificados de finalización", included: true },
            { text: "Acceso a cursos premium", included: true },
            { text: "Proyectos prácticos", included: false },
            { text: "Soporte prioritario", included: false },
            { text: "Acessoramientos personales", included: false }
        ]
    },
    {
        id: 3,
        title: "Profesional",
        price: "49",
        period: "/mes",
        isPopular: false,
        features: [
            { text: "Acceso a cursos básicos gratis", included: true },
            { text: "Certificados de finalización", included: true },
            { text: "Acceso a cursos premium", included: true },
            { text: "Proyectos prácticos", included: true },
            { text: "Soporte prioritario", included: true },
            { text: "Acessoramientos personales", included: true }
        ]
    }
];

const PricingCard = ({ plan }) => (
    <div className={`pricing-card bg-white rounded-xl shadow-xl overflow-hidden transition duration-300 transform relative ${plan.isPopular ? 'md:scale-105' : ''}`}>
        {plan.isPopular && (
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg">
                Popular
            </div>
        )}
        <div className={`${plan.isPopular ? 'bg-blue-50' : 'bg-gray-100'} py-6 px-6 text-center`}>
            <h3 className="text-xl font-bold text-dark">{plan.title}</h3>
            <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{plan.price} U$D</span>
                <span className="text-gray-500">{plan.period}</span>
            </div>
        </div>
        <div className="p-6">
            <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                        {feature.included ? (
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        ) : (
                            <i className="fas fa-times-circle text-gray-300 mr-2"></i>
                        )}
                        <span className={!feature.included ? 'opacity-50' : ''}>{feature.text}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full ${plan.isPopular ? 'bg-primary text-white hover:bg-secondary' : 'border border-primary text-primary hover:bg-blue-50'} px-4 py-3 rounded-lg transition font-medium`}>
                ¡Subscribite!
            </button>
        </div>
    </div>
);

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 gradient-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Planes Premium</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">Accede a todos nuestros cursos y contenido exclusivo con nuestros planes de suscripción</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map(plan => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;