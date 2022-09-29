import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import profile from "../assets/profile-image.jpeg"
import Typical from 'react-typical'

export const Presentation = ( { home } ) => {
  const handleGithubClick = () => {
    console.log('Visitar Github')
  }
  const handleLinkedinClick = () => {
    console.log('Visitar Linkedin')
  }

  return (
    <div ref={ home } className='bg-primary pt-[70px] h-[500px] text-tprimary'>
      <div className="flex flex-col items-center mt-24">
        <img
          src={ profile }
          alt="Profile Image"
          className='w-28 p-1 mb-4 rounded-full ring-2 ring-tprimary'
        />
        <h1 className="mb-1 text-3xl">Giovanni Vargas</h1>
        {/* <h2>Machine Learning Developer</h2> */}
        <Typical
          steps={[
            '', 500,
            'Machine Learning Developer', 1000,
            '', 500,
            'Full Stack Developer', 1000,
            '', 500,
            'Data Science Specialist', 1000,
            '', 500,
            'Python Developer Expert', 1000,
            '', 500,
            'Board Games Lover (and Expert)', 1000,
          ]}
          loop={Infinity}
          wrapper='p'
        />
        <div className='flex text-2xl w-24 mt-4 justify-around'>
          <AiFillGithub
            className='hover:text-[#f97b8b] cursor-pointer'
            onClick={ handleGithubClick }
          />
          <AiFillLinkedin
            className='hover:text-[#f97b8b] cursor-pointer'
            onClick={ handleLinkedinClick }
          />
        </div>
      </div>
    </div>
  )
}
