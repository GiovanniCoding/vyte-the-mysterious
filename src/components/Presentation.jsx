import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import profile from "../assets/profile-image.jpeg"

export const Presentation = () => {
  return (
    <div className='bg-primary pt-[70px] h-[500px] text-tprimary'>
      <div className="flex flex-col items-center mt-24">
        <img
          src={ profile }
          alt="Profile Image"
          className="rounded-full w-24 mb-4"
        />
        <h1 className="mb-1 text-3xl">Giovanni Vargas</h1>
        {/* <h2>Machine Learning Developer</h2> */}
        <Typical
          steps={['', 0,
                  'Machine Learning Developer', 1000,
                  '', 0,
                  'Full Stack Developer', 1000]}
          loop={Infinity}
          wrapper='p'
        />
        <div className='flex text-2xl w-24 mt-4 justify-around'>
          <AiFillGithub className='hover:text-[#f97b8b]' />
          <AiFillLinkedin className='hover:text-[#0e76a8]' />
        </div>
      </div>
    </div>
  )
}
