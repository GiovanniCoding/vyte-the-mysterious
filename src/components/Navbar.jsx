import { TbRobot } from 'react-icons/tb';
import { RiMenu3Line } from 'react-icons/ri'
import { AiFillExperiment } from 'react-icons/ai'
import { AiFillRocket } from 'react-icons/ai'
import { AiOutlineCode } from 'react-icons/ai'
import { useState } from 'react';

export const Navbar = ({ homeRef, aboutRef, SkillsRef, ProjectsRef, WorkExperienceRef, ContactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed h-[70px] inset-0 bg-primary text-tprimary border-b-[1px] border-primaryl1 z-10'>
      <nav className='flex justify-between center max-w-[900px] mx-auto mt-2'>
        {/* <TbRobot className='cursor-pointer ml-6 mt-1 text-5xl hover:text-[#f97b8b]' /> */}
        {/* <AiFillExperiment className='cursor-pointer ml-6 mt-1 text-5xl hover:text-[#f97b8b]' /> */}
        <AiFillRocket onClick={ () => { homeRef.current.scrollIntoView() } } className='cursor-pointer ml-6 mt-1 text-5xl hover:text-[#f97b8b]' />
        {/* <AiOutlineCode className='cursor-pointer ml-6 mt-1 text-5xl hover:text-[#f97b8b]' /> */}
        <ul className='flex min-w-[420px] justify-between mr-6 mt-4 mobile:hidden'>
          <li onClick={ () => { homeRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>Home</li>
          <li onClick={ () => { aboutRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>About</li>
          <li onClick={ () => { SkillsRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>Skills</li>
          <li onClick={ () => { ProjectsRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>Projects</li>
          <li onClick={ () => { WorkExperienceRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>Experience</li>
          <li onClick={ () => { ContactRef.current.scrollIntoView() } } className='cursor-pointer hover:text-[#f97b8b]'>Contact</li>
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
          <li onClick={ () => { homeRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>Home</li>
          <li onClick={ () => { aboutRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>About</li>
          <li onClick={ () => { SkillsRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>Skills</li>
          <li onClick={ () => { ProjectsRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>Projects</li>
          <li onClick={ () => { WorkExperienceRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>Experience</li>
          <li onClick={ () => { ContactRef.current.scrollIntoView() } } className='cursor-pointer py-1 pl-8'>Contact</li>
        </ul>
      }
    </header>
  )
}
