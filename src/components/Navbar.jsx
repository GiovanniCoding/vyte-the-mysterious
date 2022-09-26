import { TbRobot } from 'react-icons/tb';
import {RiMenu3Line} from 'react-icons/ri'

export const Navbar = () => {
  return (
    <header className='fixed h-[70px] inset-0 bg-primary text-tprimary'>
      <nav className='flex justify-between center max-w-[900px] mx-auto mt-2'>
        <TbRobot className='ml-6 mt-1 text-5xl' />
        <ul className='flex min-w-[300px] justify-between mr-6 mt-4 mobile:hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
        </ul>
        <RiMenu3Line className='text-4xl' />
      </nav>
    </header>
  )
}
