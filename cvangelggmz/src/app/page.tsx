"use client";
import React, { useState } from 'react';

const skills = [
  { name: 'React', description: 'Librería de JavaScript para construir interfaces de usuario reactivas y componentes reutilizables.' },
  { name: 'Next.js', description: 'Framework de React que permite renderizado del lado del servidor y generación de sitios estáticos.' },
  { name: 'HTML', description: 'Lenguaje de marcado utilizado para estructurar contenido en la web.' },
  { name: 'CSS', description: 'Lenguaje de estilos usado para diseñar páginas web y aplicaciones.' },
  { name: 'PHP', description: 'Lenguaje de programación para desarrollo web enfocado en el backend. Muy utilizado para proyectos como WordPress.' },
  { name: 'Python', description: 'Lenguaje de programación versátil usado en desarrollo web, análisis de datos, inteligencia artificial y más.' },
  { name: 'C++', description: 'Lenguaje de programación de propósito general utilizado en sistemas operativos, videojuegos y software de alto rendimiento.' },
  { name: 'TypeScript', description: 'Superset de JavaScript que añade tipado estático y otras funcionalidades para desarrollo más robusto.' },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Dats Telvel',
    duration: '2 años',
    description: 'Desarrollo de páginas web para clientes diversos, implementando interfaces modernas y responsivas.',
    details: [
      'Implementación de diseño responsivo.',
      'Optimización de rendimiento en sitios web.',
      'Colaboración con equipos de backend para integración de APIs.',
    ],
  },
  {
    title: 'Proyecto personal',
    company: 'Barbería',
    duration: 'Independiente',
    description: 'Creación de una plataforma para agendar citas y administrar una barbería.',
    details: [
      'Diseño de interfaz para clientes y administradores.',
      'Integración de pagos en línea.',
      'Despliegue en servicios en la nube.',
    ],
  },
];

const projects = [
  {
    title: 'Barbería Digital',
    image: '/barber.png',
    description: 'Plataforma para agendar citas y gestionar una barbería con diseño responsivo.',
    details: [
      'Sistema de reservas en tiempo real.',
      'Interfaz de usuario moderna y funcional.',
      'Integración con sistemas de pago en línea.',
    ],
  },
  {
    title: 'E-commerce de Ropa',
    image: '/soporte.jpg',
    description: 'Apartado de Sopoprte para manejar tickets.',
    details: [
      'CRUD Funcional.',
      'Apartado para quejas o Errores que le da al Cliente.',
      'intercativo para las personas.',
    ],
  },
];

const hobbies = [
  'Escuchar música y aprender a tocar algunos instrumentos.',
  'Practicar deportes como fútbol, jugar videojuegos.',
  'Aprender nuevas tecnologías y lenguajes de programación.',
  'Viajar y explorar nuevos lugares.',
  'Hacer deporte con mis amigos y salir.',
];

const CV = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<null | { title: string; description: string; details?: string[] }>(null);

  const openModal = (title: string, description: string, details?: string[]) => {
    setModalContent({ title, description, details });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 flex flex-col justify-between">
        <div>
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
            <img
              src="/DSCF5357.jpg"
              alt="Ángel Gómez García"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-center">Ángel Gómez García</h2>
          <p className="text-center text-gray-400 mt-2">Frontend Developer</p>
          <div className="mt-6 space-y-4 text-sm">
            <p>
              <span className="font-semibold text-gray-200">Correo:</span>{' '}
              <span className="text-gray-400">angel.jsjsjbdd@gmail.com</span>
            </p>
            <p>
              <span className="font-semibold text-gray-200">Teléfono:</span>{' '}
              <span className="text-gray-400">+52 222 114 9244</span>
            </p>
            <p>
              <span className="font-semibold text-gray-200">Edad:</span>{' '}
              <span className="text-gray-400">20 años</span>
            </p>
            <p>
              <span className="font-semibold text-gray-200">Ubicación:</span>{' '}
              <span className="text-gray-400">Puebla, México</span>
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 bg-white text-gray-900 shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Currículum Vitae</h1>
        </div>

        {/* Acerca de mí */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Acerca de mí</h2>
          <p className="mt-4 text-gray-700">
            Soy un desarrollador frontend apasionado por crear interfaces atractivas y funcionales. Siempre estoy en búsqueda de
            mejorar mis habilidades y enfrentar nuevos retos. Me encanta aprender sobre nuevas tecnologías y compartir mis
            conocimientos con otros.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Hobbies</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>

        {/* Habilidades */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Habilidades</h2>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold shadow-md transform transition hover:scale-105 hover:rotate-1 cursor-pointer"
                onClick={() => openModal(skill.name, skill.description)}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Experiencia */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Experiencia</h2>
          <div className="mt-4 space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 p-5 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => openModal(exp.title, exp.description, exp.details)}
              >
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company} - {exp.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portafolio */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Portafolio</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => openModal(project.title, project.description, project.details)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700 mb-4">{modalContent.description}</p>
            {modalContent.details && (
              <ul className="list-disc pl-5 space-y-2">
                {modalContent.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;
