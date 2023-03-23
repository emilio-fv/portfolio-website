import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import resumeLink from '../../data/resume.pdf';

const Navbar = () => {
    const handleResumeClick = () => {
        window.open(resumeLink, '_blank');
    }

    return (
        <nav className='flex justify-between items-center p-6 sticky top-0 border-solid border-b-[.5px] border-white'>
            <div>
                <AnchorLink to='/#home'>
                    <p className='text-4xl'>EV</p>
                </AnchorLink>
            </div>
            <ul className='flex gap-10 items-center text-lg'>
                <li>
                    <AnchorLink to="/#about" className='hover:underline'>About</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#projects" className='hover:underline'>Projects</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#experience" className='hover:underline'>Experience</AnchorLink>
                </li>
                <li>
                    <AnchorLink to="/#contact" className='hover:underline'>Contact</AnchorLink>
                </li>
                <li>
                    <button onClick={event => handleResumeClick()} className='px-4 py-1 border-solid border-[.5px] border-white hover:border-slate-400' >Resume</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;