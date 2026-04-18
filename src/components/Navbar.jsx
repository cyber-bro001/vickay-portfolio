import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HomeIcon } from 'lucide-react';

export const Navbar = () => {

    return (
        <header className='sticky top-10 md:20 w-full flex items-center justify-center z-50'>
            <nav className='w-80 flex items-center justify-between px-4 py-3 bg-cardBg/40 rounded-2xl backdrop-blur-sm border border-accentSoft'>
                <Link to="/" className=""><HomeIcon className='w-5 h-6' /></Link>
                <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                <div className='flex items-center justify-between space-x-4'>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-5 h-5' />
                    </a>
                    <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='w-5 h-5' />
                    </a>
                    <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='w-5 h-5' />
                    </a>
                </div>
                <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                <Link to="/blog" className="bg-accentColor text-xs md:text-base text-primaryText py-2 px-4 rounded-2xl hover:bg-accentSoft transition-colors duration-300">
                    Contact
                </Link>
            </nav>
        </header>
    );
};