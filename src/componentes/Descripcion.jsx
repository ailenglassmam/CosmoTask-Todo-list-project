import React from 'react'

export default function Descripcion() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">¿Te encuentras a menudo volando en tu imaginación, perdido en otro planeta o distraído por las maravillas del universo?</h2>
        <p className="text-base text-gray-700 md:text-lg">No te preocupes, en CosmoTask entendemos que tu mente es cósmicamente creativa.</p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-indigo-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Organización eficiente para un estilo de vida ocupado.</h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-purple-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Mayor productividad, resultados impresionantes.</h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-purple-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Tareas bajo control, sin importar el planeta en el que estés.</h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-pink-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Equilibrio entre responsabilidad y creatividad</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
