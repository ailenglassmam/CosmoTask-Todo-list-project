import { CalendarMonth, Delete } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

export default function Dashboard({ tareas: tareasProp }) {
  const [tareas, setTareas] = useState(tareasProp || []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTareas(storedTasks);
  }, []);

  const handleDeleteTask = (index) => {
    // Obtener las tareas existentes del almacenamiento local
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remover la tarea del arreglo
    const updatedTasks = existingTasks.filter((_, i) => i !== index);

    // Guardar las tareas actualizadas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Actualizar el estado del componente
    setTareas(updatedTasks);
  };

  return (
    <section className="bg-transparent">
      {/* dashboard: tareas pendientes */}
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-2xl">Tareas Pendientes</h3>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* card tarea */}
          {tareas.map((tarea, index) => {
            if (!tarea.urgente) {
              return (
                <div key={index} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                  {/* card tarea */}
                  <div className="p-5">
                    {/* fecha y urgencia */}
                    <div className="flex items-center justify-end mb-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
                        <CalendarMonth fontSize="small"></CalendarMonth>
                        <p className="whitespace-nowrap text-sm">{tarea.fecha}</p>
                      </div>
                    </div>
                    {/* contenido */}
                    <p className="mb-2 font-bold">{tarea.titulo}</p>
                    <p className="text-sm leading-5 text-gray-900">{tarea.descripcion}</p>
                    <div className="flex items-center justify-end mt-4">
                      <button type="submit" className='mt-2 justify-self-end' onClick={() => handleDeleteTask(index)}><Delete></Delete></button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div> 
      {/* dashboard: tareas urgentes */}
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-t-4 border-purple-500">
        <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-2xl">Tareas Urgentes</h3>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* card tarea urgente*/}
          {tareas.map((tarea, index) => {
            if (tarea.urgente) {
              return (
                <div key={index} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl border-4 border-pink-500">
                  {/* card tarea */}
                  <div className="p-5">
                    {/* fecha y urgencia */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500">
                        <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="white" viewBox="0 0 52 52">
                          <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                        </svg>
                      </div>
                      <div className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
                        <CalendarMonth fontSize="small"></CalendarMonth>
                        <p className="whitespace-nowrap text-sm">{tarea.fecha}</p>
                      </div>
                    </div>
                    {/* contenido */}
                    <p className="mb-2 font-bold">{tarea.titulo}</p>
                    <p className="text-sm leading-5 text-gray-900">{tarea.descripcion}</p>
                    <div className="flex items-center justify-end mt-4">
                      <button type="submit" className='mt-2 justify-self-end' onClick={() => handleDeleteTask(index)}><Delete></Delete></button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}