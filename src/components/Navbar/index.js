import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import resumeLink from '../../data/resume.pdf';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeClick = () => {
        window.open(resumeLink, '_blank');
    }

    const handleMenuClick = () => {
        menuOpen === true ? setMenuOpen(false) : setMenuOpen(true);
    }

    return (
        <nav className='flex items-center justify-between sticky top-0 pt-6 border-solid border-b-[1px] border-white'>
            {/* Logo */}
            <div className='flex items-center flex-shrink-0 ml-6 mb-6'>
                <AnchorLink to='/#home'>
                    <p className='text-2xl md:text-4xl'>EV</p>
                </AnchorLink>
            </div>
            {/* Menu */}
            <div>
                <ul class={`flex text-sm flex-grow items-center flex-row items-end py-3 gap-1 pr-4 flex-row mb-6 justify-end gap-2 md:gap-6`}>
                    <li>
                        <AnchorLink to="/#about" className='hover:underline text-xs md:text-lg'>About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#projects" className='hover:underline text-xs md:text-lg'>Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#experience" className='hover:underline text-xs md:text-lg'>Experience</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#contact" className='hover:underline text-xs md:text-lg'>Contact</AnchorLink>
                    </li>
                    <li>
                        <button onClick={event => handleResumeClick()} className='text-xs px-4 py-1 border-solid border-[.5px] border-white hover:border-slate-400 text-lg'>Resume</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;