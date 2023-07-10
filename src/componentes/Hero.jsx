import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import Volar from '../assets/images/jetpack.svg'

export default function Hero() {
  return (
    <section className="relative">
      <div className='bg-custom-image brightness-50 absolute inset-0 object-cover w-full h-full bg-cover bg-center'></div>
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">¡Prepárate para regresar a tierra con CosmoTask y recordar todo lo que tienes que hacer!</h2>
          <p className="mb-6 font-normal tracking-tight leading-8 text-white md:text-lg">Regresa a la tierra y aterriza suavemente en tus responsabilidades diarias. Con CosmoTask, podrás mantener tus pies en el suelo mientras tu imaginación se eleva. Organiza tus tareas, enfoca tus prioridades y descubre cómo la magia de la productividad puede llevar tus sueños más lejanos a convertirse en realidades tangibles.</p>
          <Link to="formulario" smooth={true} duration={500} className="flex items-center justify-center w-10 h-10 mx-auto bg-white duration-300 transform rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
            <img src={Volar} alt="Ir a formulario de tareas" className='bg-white' />
          </Link>
        </div>
      </div>
    </section>
  );
}
