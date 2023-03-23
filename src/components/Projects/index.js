import * as React from "react"
import projectData from "../../data/projects.js";
// TODO import project card

const Projects = () => {
    return (
        <div id="projects" className="container px-40 flex flex-col justify-center gap-10 min-h-screen border-solid border-b-[.5px] border-white">
            <p className="text-4xl">Projects</p>
            <div className="">
                {projectData.map((project) => (
                    // TODO project card
                    null
                ))}
            </div>
        </div>
    )
}

export default Projects;