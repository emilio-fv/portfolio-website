import * as React from "react";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="w-full min-h-[150px] p-8 flex flex-col bg-accent-medium rounded-lg">
            {/* top row */}
            <div className="flex justify-between items-end">
                <div className="flex basis-2/3 gap-[25px] items-end">
                    <p className="text-2xl">{ experience.title }</p>
                    <p>{ experience.company }</p>
                    <p>{ experience.location }</p>
                </div>
                <div className="flex basis-1/3 justify-end">
                    <p>{ experience.dates }</p>
                </div>
            </div>
            {/* bottom row */}
            <div className="h-full py-[10px]">
                <ul className="px-[25px]">
                    {experience.description.map((item) => (
                        <li className="list-disc">{ item }</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default ExperienceCard;