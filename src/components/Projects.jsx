import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <div className="my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">

        <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Projects we are proud of</h2>

        <div className="grid gap-4 grid-cols-3">

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        </div>

      </section>
    </div>
  )
}
