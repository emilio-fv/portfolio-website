import * as React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">
            {/* Image */}
            <div className="flex justify-center lg:flex-1">
                <img src={project.src} alt={project.alt} className="max-h-[250px]"/>
            </div>
            {/* Project Info */}
            <div className="lg:flex-[4] flex flex-col justify-center gap-3 bg-accent-medium rounded-lg p-8">
                <div className="flex flex-row gap-3 items-end">
                    <p className="text-2xl md:text-3xl">{project.title}</p>
                    <a href={project.github} className="hover:underline">Github</a>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <p>Built with: {project.technologies.map((value) => value + " ")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;