import profile from "../assets/profile-image.jpeg"
import Typical from 'react-typical'
import { Linkedin } from "../assets/Linkedin"

export const Presentation = () => {
  return (
    <div className='bg-primary pt-[70px] h-[500px] text-tprimary'>
      <div className="flex flex-col items-center mt-24">
        <img
          src={ profile }
          alt="Profile Image"
          className="rounded-full w-24 mb-4"
        />
        <h1 className="mb-1 text-2xl">Giovanni Vargas</h1>
        <Typical
          steps={['', 0,
                  'Machine Learning Developer', 1000,
                  '', 0,
                  'Full Stack Developer', 1000]}
          loop={Infinity}
          wrapper='p'
        />
        {/* <Linkedin className='fill-tprimary' /> */}
      </div>
    </div>
  )
}
