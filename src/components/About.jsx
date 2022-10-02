import profile from "../assets/profile-image.jpeg"

export const About = ( { aboutRef } ) => {

  return (
    <div ref={ aboutRef } className="bg-[#F9F9FF] py-10">
      <h1 className="text-5xl pl-24 pb-8">About</h1>
      <div className="flex justify-center mx-4">
        <div className="flex mobile:flex-col mobile:items-center gap-4">
          <img
            src={ profile }
            alt="Profile Image"
            className='w-28 h-28 my-auto p-1 rounded-full'
          />
          <div className="flex mobile:flex-col mobile:items-center gap-4 p-6 desktop:max-w-[45rem] bg-[#ffffff] rounded-3xl">
            <p className="desktop:w-1/2 mobile:w-3/4 text-primary">Hi I'm Giovanni, Machine Learning, Full Stack Developer and Data Science Enthusiastic from México. Technology enthusiast, I love to spend my days getting to know the latest tools in the world of technology, so I love to enjoy my free time with board games, mountain biking and dogs.</p>
            <div className="desktop:w-1/2 mobile:w-2/3">
              {/* Machine Learning Bar */}
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium text-primary">Machine Learning Developer</span>
                <span className="text-sm font-medium text-primary my-auto">85%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              {/* Backend Developer Bar */}
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium text-primary">Backend Developer</span>
                <span className="text-sm font-medium text-primary">78%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
              {/* Frontend Developer Bar */}
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium text-primary">Frontend Developer</span>
                <span className="text-sm font-medium text-primary">60%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
