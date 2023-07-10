import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import Dashboard from './Dashboard'

export default function Agenda() {
  const [tareas, setTareas] = useState([]);

  const handleUpdateTasks = (updatedTasks) => {
    setTareas(updatedTasks);
  };

  return (
    <section>
      <Formulario onSubmitForm={handleUpdateTasks} />
      <Dashboard tareas={tareas} />
    </section>

  )
}
