import { ProjectCard } from "./ProjectCard"
import { FaFire, FaSun } from 'react-icons/fa';
import { AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai';
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
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out"
                  style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-3">Nintendo Switch Games Recommendation</h5>

              <div className="flex gap-3 justify-center">
                <div
                onClick={ () => { window.location.href = "https://github.com/GiovanniCoding/nyzyss-the-eternal-frontend" } }
                className="mb-3 text-blue-500 font-medium text-sm flex items-center justify-center cursor-pointer">
                  <AiFillGithub className="mr-1" /> Github
                </div>
                <div
                onClick={ () => { window.location.href = "https://github.com/GiovanniCoding/nyzyss-the-eternal-frontend" } }
                className="mb-3 text-yellow-700 font-medium text-sm flex items-center justify-center cursor-pointer">
                  <AiFillCodepenCircle className="mr-1" /> Live Demo
                </div>
              </div>

              <p className="mb-4 pb-2">
                Web application that allow you to receive recommendations for nintendo switch games that you might like based on games of your choice.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
