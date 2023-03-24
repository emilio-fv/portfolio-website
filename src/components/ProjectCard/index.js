import * as React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full flex flex-row gap-[25px]">
            <div className="basis-1/5">
                <img src={project.src} alt={project.alt} />
            </div>
            <div className="basis-4/5 flex flex-col gap-[10px] p-8 bg-accent-medium rounded-lg">
                <div className="flex flex-row items-end gap-[25px]">
                    <p className="text-2xl">{project.title}</p>
                    <a href={project.github} target="_blank" className="hover:underline">Github</a>
                </div>
                <p>{project.description}</p>
                <div className="flex flex-row gap-[10px]">
                    <p>Built with:</p>
                    {project.technologies.map((value) => 
                        <p>{value}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;