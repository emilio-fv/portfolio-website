import * as React from "react";

const Footer = () => {
    return (
        <div className="container px-40 py-10 flex flex-col justify-center items-center">
            <p className="text-xl">Designed by: <a href="https://github.com/emilio-fv" target="_blank" className="hover:underline">Emilio Vazquez</a></p>
            <a href="https://github.com/emilio-fv/portfolio-website" className="hover:underline text-xl" target="_blank">Github</a>
        </div>
    )
}

export default Footer;