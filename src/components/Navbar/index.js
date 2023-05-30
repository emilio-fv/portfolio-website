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
        <nav className='flex items-center justify-between flex-wrap sticky top-0 pt-6 border-solid border-b-[1px] border-white'>
            {/* Logo */}
            <div className='flex items-center flex-shrink-0 ml-6  mb-6'>
                <AnchorLink to='/#home'>
                    <p className='text-4xl'>EV</p>
                </AnchorLink>
            </div>
            {/* Menu Icon */}
            <div className='block md:hidden'>
                <button className='flex items-center px-3 py-2 border rounded mr-6 mb-7' onClick={event => handleMenuClick()} >
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {/* Menu (Mobile) */}
            <div
                className={`w-full block flex-grow md:flex md:items-center md:w-auto md:bg-inherit ${menuOpen === true ? 'bg-accent-medium' : 'hidden'}`}>
                <ul class={`text-sm md:flex-grow md:items-center flex flex-col items-end py-3 gap-1 pr-4 md:flex-row md:mb-6 md:justify-end md:gap-6`}>                    
                    <li>
                        <AnchorLink to="/#about" className='hover:underline text-lg'>About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#projects" className='hover:underline text-lg'>Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#experience" className='hover:underline text-lg'>Experience</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#contact" className='hover:underline text-lg'>Contact</AnchorLink>
                    </li>
                    <li>
                        <button onClick={event => handleResumeClick()} className='px-4 py-1 border-solid border-[.5px] border-white hover:border-slate-400 text-lg'>Resume</button>
                    </li>
                </ul>
            </div>
            {/* Menu Desktop */}
            <div
                className={`w-full block sm:hidden flex-grow md:flex md:items-center md:w-auto md:bg-inherit`}>
                <ul class={`text-sm md:flex-grow md:items-center flex flex-col items-end py-3 gap-1 pr-4 md:flex-row md:mb-6 md:justify-end md:gap-6`}>                    
                    <li>
                        <AnchorLink to="/#about" className='hover:underline text-lg'>About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#projects" className='hover:underline text-lg'>Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#experience" className='hover:underline text-lg'>Experience</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#contact" className='hover:underline text-lg'>Contact</AnchorLink>
                    </li>
                    <li>
                        <button onClick={event => handleResumeClick()} className='px-4 py-1 border-solid border-[.5px] border-white hover:border-slate-400 text-lg'>Resume</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;