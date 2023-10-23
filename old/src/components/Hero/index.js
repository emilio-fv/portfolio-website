import * as React from "react"

const Hero = () => {
    return (
        <div id="home" className="container flex flex-col gap-y-2.5 justify-center h-90 px-20 md:px-40 border-solid border-b-[.5px] border-white">
            <p className="text-lg md:text-4xl">Hi, my name is</p>
            <h2 className="text-6xl md:text-8xl">Emilio Vazquez</h2>
            <h3 className="text-xl md:text-5xl">Software Developer</h3>
        </div>
    )
}

export default Hero