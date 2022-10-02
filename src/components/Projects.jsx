import { ProjectCard } from "./ProjectCard"
import { FaFire, FaSun } from 'react-icons/fa';
import { AiTwotoneExperiment } from 'react-icons/ai';

export const Projects = () => {
  return (
    <section className="px-6 py-12 bg-tprimary">

      <h2 className="text-5xl pl-24 pb-16 text-primary">Projects</h2>

      <h1 className="text-6xl w-40 text-primary mx-auto">Soon...</h1>

      {/* <div className="grid mobile:grid-cols-1 grid-cols-3 gap-x-6 gap-y-12">

        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-3">White city</h5>
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                <FaFire /> Hot news
              </div>
              <p className="mb-4 pb-2">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">A lonely bench</h5>
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
                <AiTwotoneExperiment /> Experiment
              </div>
              <p className="mb-4 pb-2">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                diam orci, nec ornare metus semper sed. Integer volutpat
                ornare erat sit amet rutrum.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">Happy snow</h5>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                <FaSun /> Experiment
              </div>
              <p className="mb-4 pb-2">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-3">White city</h5>
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                <FaFire /> Hot news
              </div>
              <p className="mb-4 pb-2">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">A lonely bench</h5>
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
                <AiTwotoneExperiment /> Experiment
              </div>
              <p className="mb-4 pb-2">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                diam orci, nec ornare metus semper sed. Integer volutpat
                ornare erat sit amet rutrum.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp" className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">Happy snow</h5>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                <FaSun /> Experiment
              </div>
              <p className="mb-4 pb-2">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div>
        </div>

      </div> */}

    </section>
  )
}
