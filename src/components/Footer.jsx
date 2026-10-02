import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border border-accentSoft py-10 mt-20">
            <div className="container mx-auto text-center text-sm text-mutedText">
                &copy; {new Date().getFullYear()} Kay. All rights reserved.
                <div className="flex items-center justify-center space-x-4 mt-4">
                    <a href="https://github.com/cyber-bro001" className="hover:text-accentColor transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-5 h-5' />
                    </a>
                    <a href="https://www.linkedin.com/in/kelechi-okwuwa-4b237335a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNxyUScK7RGGp7i3uskOHrw%3D%3D" target="blank" rel="noopener noreferrer" className="hover:text-accentColor transition-colors">
                        <FaLinkedin className='w-5 h-5' />
                    </a>
                    <a href="@hey_kelechi_" target="blank" rel="noopener noreferrer" className="hover:text-accentColor transition-colors">
                        <FaXTwitter className='w-5 h-5' />
                    </a>
                    <a href="https://wa.me/2347015715944" target="blank" rel="noopener noreferrer" className="hover:text-accentColor transition-colors">
                        <FaWhatsapp className='w-5 h-5' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
