import React from 'react'
import Logo from '../assets/images/logo.svg'

export default function Navbar() {
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex justify-center">
        <img src={Logo} alt="AlienDo Logo" className='h-8'/>
        </div>
      </div>
  );
};