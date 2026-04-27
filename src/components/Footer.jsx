import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border border-accentSoft py-10 mt-20">
            <div className="container mx-auto text-center text-sm text-mutedText">
                &copy; {new Date().getFullYear()} Vickay. All rights reserved.
                <div className="flex items-center justify-center space-x-4 mt-4">
                    <a href="https://github.com/cyber-bro001" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-5 h-5' />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-okwuwa-4b237335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='w-5 h-5' />
                    </a>
                    <a href="https://x.com/hey_vickay" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className='w-5 h-5' />
                    </a>
                    <a href="mailto: vkay543@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className='w-5 h-5' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;