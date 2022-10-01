export const WorkExperience = () => {
  return (
    <section className="bg-primary text-tprimary">
      <h1 className="text-5xl pl-24 py-8">Work Experience</h1>
      {/* Experience */}
      <div className="flex flex-col gap-4 items-center pt-4 pb-8">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="block h-5 w-5 bg-blue-400 rounded-full" />
            <span className="block h-[5rem] w-[0.1rem] bg-blue-400" />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h2>
              <span className="text-xl font-semibold tracking-wide">B2BIntegrator </span>
              -
              <span className="text-md"> HSBC</span>
            </h2>
            <time className="text-xs track text-gray-400">2022 - present</time>
            <p className="mt-3">Hired for the development, testing and maintenance of code for Geolocation in transaction environments, as well as the search for new lines of business with the use of this data.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="block h-5 w-5 bg-blue-400 rounded-full" />
            <span className="block h-16 w-[0.1rem] bg-blue-400" />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h2>
              <span className="text-xl font-semibold tracking-wide">Developer </span>
              -
              <span className="text-md"> Gedosal</span>
            </h2>
            <time className="text-xs track text-gray-400">2022 - present</time>
            <p className="mt-3">Hired for the data acquisition department and the implementation of machine learning models in Natural Language Processing for the detection of articles in violation of copyright.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="block h-5 w-5 bg-blue-400 rounded-full" />
            <span className="block h-16 w-[0.1rem] bg-blue-400" />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h2>
              <span className="text-xl font-semibold tracking-wide">Developer </span>
              -
              <span className="text-md"> Real Metrics</span>
            </h2>
            <time className="text-xs track text-gray-400">2018 - 2019</time>
            <p className="mt-3">Hired for the migration to Python of the data acquisition department system and the design, development, assembly and maintenance of the automation of data acquisition for ecommerce portals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
