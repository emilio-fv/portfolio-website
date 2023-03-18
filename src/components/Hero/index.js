import * as React from "react"
import { hero } from './index.module.css';

const Hero = () => {
    return (
        <div className={hero}>
            <p>Hi, my name is</p>
            <p>Emilio Vazquez</p>
            <p>Software Developer</p>
        </div>
    )
}

export default Hero