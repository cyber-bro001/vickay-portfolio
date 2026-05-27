import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto px-7 md:px-15 py-20">
            <h1 className="text-xl md:text-3xl font-bold mb-8 text-primaryText text-heading">Get In Touch</h1>
            <p className="text-sm md:text-base leading-relaxed mb-4">I’m currently open to new opportunities and collaborations. Working on something? Hit me up let's make it live.</p>

            <ContactForm />
        </div>
    );
}

export default Contact;