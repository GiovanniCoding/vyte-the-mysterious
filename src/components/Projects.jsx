import { ProjectCard } from "./ProjectCard"
import { FaFire, FaSun } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import nintendoSwitchGamesRecommendation from '../assets/projects/nintendo-switch-recommendation.png';

export const Projects = ({ ProjectsRef }) => {
  return (
    <section ref={ ProjectsRef } className="px-6 py-12 bg-tprimary">

      <h2 className="text-5xl pl-24 pb-16 text-primary">Projects</h2>

      <div className="grid mobile:grid-cols-1 grid-cols-3 gap-x-6 gap-y-12">

        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={nintendoSwitchGamesRecommendation} className="w-full" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-3">Nintendo Switch Games Recommendation</h5>
              <div className="mb-3 text-blue-500 font-medium text-sm flex items-center justify-center">
                <AiFillGithub /> Github
              </div>
              <p className="mb-4 pb-2">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
