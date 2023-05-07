import * as React from "react"
import projectData from "../../data/projects.js";
import ProjectCard from "../ProjectCard/index.js";

const Projects = () => {
    return (
        <div id="projects" className="container min-h-screen px-14 md:px-40 py-[125px] flex flex-col justify-center gap-10 border-solid border-b-[.5px] border-white">
            <p className="text-4xl">Projects</p>
            <div className="flex flex-col justify-center items-center gap-[25px]">
                {projectData.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;