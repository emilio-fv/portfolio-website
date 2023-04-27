import * as React from "react"
import headshot from '../../images/headshot.jpg';

const About = () => {
    return (
        <div id="about" className="container px-40 flex flex-col justify-center gap-10 h-screen border-solid border-b-[.5px] border-white">
            <p className="text-4xl">About</p>
            <div className="flex flex-row">
                <div className="basis-3/5">
                    <p className="text-2xl">Hi! I'm Emilio, a Full-Stack Developer who is passionate about bringing new ideas to life. I have a background as a classically trained violinist, music teacher, and arts administrator, which taught me to not only find the beauty in the details but to also have the patience to create it. I began my coding journey at the start of 2022 as a side project and decided to make a career out of it. I recently graduated from a coding bootcamp at <a className="hover:underline" href='https://www.codingdojo.com/'>Coding Dojo</a>, a 14-week intensive program that works through 3 different stacks (Python, C#, and MERN) and am currently looking for new opportunities to continue learning and growing as a software developer.</p>
                </div>
                <div className="basis-2/5 flex justify-center items-center">
                    <img src={headshot} alt="Headshot" className="h-[225px] rounded-full"/>
                </div>
            </div>
        </div>
    )
}

export default About;