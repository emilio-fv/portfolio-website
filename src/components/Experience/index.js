import * as React from "react";
import experienceData from "../../data/experience";
import ExperienceCard from "../ExperienceCard";

const Experience = () => {
    return (
        <div id="experience" className="container px-40 flex flex-col justify-center gap-10 h-screen border-solid border-b-[.5px] border-white">
            <p className="text-4xl">Experience</p>
            <div className="flex flex-col justify-center items-center gap-[25px]">
                {experienceData.map((experience) => (
                    <ExperienceCard experience={experience} />
                ))}
            </div>
        </div>
    )
};

export default Experience;