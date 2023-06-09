import * as React from "react";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="w-full bg-accent-medium rounded-lg p-8">
            {/* Header (Desktop) */}
            <div className="lg:inline lg:flex lg:flex-row lg:justify-between items-end">
                <div className="lg:flex lg:gap-6 lg:items-end">
                    <p className="md:text-2xl">{experience.title}</p>
                    <p className="text-xs md:text-lg">{experience.company} | {experience.location}</p>
                </div>
                <div>
                    <p className="md:text-lg">{experience.dates}</p>
                </div>
            </div>
            {/* Description */}
            <div className="py-[10px]">
                <ul className="px-[25px]">
                    {experience.description.map((item) => (
                        <li className="list-disc text-xs md:text-lg">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default ExperienceCard;