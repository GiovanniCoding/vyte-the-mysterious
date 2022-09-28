import profile from "../assets/profile-image.jpeg"

export const About = () => {
  return (
    <div className="bg-[#F9F9FF] py-10">
      <h1 className="text-5xl pl-24 pb-8">About</h1>
      <div className="flex justify-center mx-4">
        <div className="flex gap-4">
          <img
            src={ profile }
            alt="Profile Image"
            className='w-28 h-28 my-auto p-1 rounded-full'
          />
          <div className="flex gap-4 p-6 max-w-[40rem] bg-[#ffffff] rounded-3xl">
            <p className="w-1/2 text-primary">Hi I'm Giovanni and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ... and ...</p>
            <div className="w-1/2">
              {/* Machine Learning Bar */}
              <div class="flex justify-between mb-2">
                <span class="text-base font-medium text-primary">Machine Learning Developer</span>
                <span class="text-sm font-medium text-primary">80%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                <div class="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              {/* Backend Developer Bar */}
              <div class="flex justify-between mb-2">
                <span class="text-base font-medium text-primary">Backend Developer</span>
                <span class="text-sm font-medium text-primary">70%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-emerald-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
