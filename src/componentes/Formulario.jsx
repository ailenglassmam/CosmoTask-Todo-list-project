import React from 'react'
import { useState } from 'react'

export default function Formulario({ onSubmitForm }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [urgente, setUrgente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      titulo,
      descripcion,
      fecha,
      urgente,
    };

    // Obtener las tareas existentes del almacenamiento local
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Agregar la nueva tarea a las existentes
    const updatedTasks = [...existingTasks, data];

    // Guardar las tareas actualizadas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Limpiar el formulario
    setTitulo('');
    setDescripcion('');
    setFecha('');
    setUrgente(false);

    onSubmitForm(updatedTasks);
  };

  return (
    <section id='formulario' className="overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">¡Prepárate para conquistar tu día galáctico! En esta sección, podrás añadir todas tus tareas pendientes y organizarlas cómodamente.</h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">Completa el formulario con el título de la tarea, una descripción, la fecha de inicio y fin, así como el grado de importancia. </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Formulario de tareas estelares</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="titulo" className="inline-block mb-1 font-medium"
                    >Titulo</label>
                    <input placeholder="Rescatar a los marcianos perdidos" required type="text" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" id="titulo" name="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="descripcion" className="inline-block mb-1 font-medium"
                    >Descripción</label>
                    <textarea placeholder="Llevar traje espacial favorito" required type="text" className="flex-grow w-full h-12 p-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" id="descripcion" name="descripcion" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} maxlength="100"/>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="fechaLimite" className="inline-block mb-1 font-medium"
                    >Fecha Límite</label>
                    <input placeholder="Llevar traje espacial favorito" required type="date" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" id="fechaLimite" name="fechaLimite" value={fecha} onChange={(event) => setFecha(event.target.value)} />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label class="cursor-pointer label">
                      <input type="checkbox" name="urgente" value={urgente} class="checkbox checkbox-warning" id="urgent" onChange={(event) => setUrgente(event.target.value)} />
                      <span class="label-text pl-2">Es urgente</span>
                    </label>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-900 focus:shadow-outline focus:outline-none" >Agregar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}