import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border border-accentSoft py-10 mt-20">
            <div className="container mx-auto text-center text-sm text-mutedText">
                &copy; {new Date().getFullYear()} Vickay. All rights reserved.
                <div className="flex items-center justify-center space-x-4 mt-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-5 h-5' />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='w-5 h-5' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='w-5 h-5' />
                    </a>
                    <a href="mailto:vickay@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className='w-5 h-5' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;