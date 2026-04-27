import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HomeIcon } from 'lucide-react';

export const Navbar = () => {

    return (
        <header className='sticky top-10 md:top-15 w-full flex items-center justify-center z-50 '>
            <nav className='
relative z-0
w-80 md:w-96 
bg-cardBg/10 border border-accentSoft/20 backdrop-blur-xl
rounded-xl

before:absolute before:inset-0 before:rounded-xl
before:bg-[linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05),rgba(255,255,255,0.12))]
before:opacity-50
before:pointer-events-none
before:z-0
'>
                <div className="relative z-10 flex items-center justify-between w-full px-6 py-3">

                    <Link to="/" className="text-primaryText"><HomeIcon className='w-5 h-5' /></Link>

                    <span className='w-1 h-1 bg-accentSoft rounded-full'></span>

                        <a href="https://github.com/cyber-bro001" className="text-primaryText hover:text-accentColor transition-colors"><FaGithub className='w-5 h-5' /></a>
                        <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                        <a href="https://www.linkedin.com/in/victor-okwuwa-4b237335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-primaryText hover:text-accentColor transition-colors"><FaLinkedin className='w-5 h-5' /></a>
                        <span className='w-1 h-1 bg-accentSoft rounded-full'></span>
                        <a href="https://x.com/hey_vickay" className="text-primaryText hover:text-accentColor transition-colors"><FaXTwitter className='w-5 h-5' /></a>
              

                    <span className='w-1 h-1 bg-accentSoft rounded-full'></span>

                    <Link to="/contact" className="text-primaryText bg-accentColor hover:bg-accentSoft px-4 py-2 rounded-xl text-sm font-medium">
                        Contact
                    </Link>

                </div>
            </nav>
        </header>
    );
};