import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import './index.module.css';

const Navbar = () => {
    return (
        <nav>
            <div>
                <p>LOGO</p>
            </div>
            <ul>
                <li>
                    <AnchorLink to="/#about">About</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#projects">Projects</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#experience">Experience</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#contact">Contact</AnchorLink>
                </li>
                <li>
                    <button>Resume</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;