import { TbRobot } from 'react-icons/tb';
import {RiMenu3Line} from 'react-icons/ri'
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isMenuOpen) {
    console.log('Menú abierto')
  } else {
    console.log('Menú cerrado')
  }

  return (
    <header className='fixed h-[70px] inset-0 bg-primary text-tprimary'>
      <nav className='flex justify-between center max-w-[900px] mx-auto mt-2'>
        <TbRobot className='cursor-pointer ml-6 mt-1 text-5xl' />
        <ul className='flex min-w-[300px] justify-between mr-6 mt-4 mobile:hidden'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Experience</li>
        </ul>
        <RiMenu3Line
          className='text-4xl mr-6 mt-3 desktop:hidden cursor-pointer'
          onClick={ handleOnClick }
        />
      </nav>
      {
        isMenuOpen
        &&
        <ul className='bg-primary py-3'>
          <li className='cursor-pointer py-1 pl-8'>Home</li>
          <li className='cursor-pointer py-1 pl-8'>About</li>
          <li className='cursor-pointer py-1 pl-8'>Experience</li>
        </ul>
      }
    </header>
  )
}
