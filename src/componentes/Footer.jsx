import React from 'react'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import Logo from '../assets/images/logo.svg'

export default function Footer() {
  return (
    <div className="relative mt-2 bg-deep-purple-accent-400">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-900">© Copyright 2023 | Sitio creado con <FavoriteRoundedIcon/> por Ailén Glassmam</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href='mailto:ailenglas97@gmail.com' target='_blank'><MailRoundedIcon/></a>
            <a href='https://www.linkedin.com/in/ailenglassmam/' target='_blank'><InsertEmoticonRoundedIcon/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
