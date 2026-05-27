

const ContactForm = () => {

    return (
        <form className="mt-10 space-y-5">
            <div className="w-full grid grid-col-1 md:grid-cols-2 gap-5">
                <input name="full-name" placeholder="Full Name" className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft" />
                <input name="email" placeholder="Email" className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft" />
            </div>
            <textarea name="message" rows="5" placeholder="Write your message" className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft"></textarea>

            <button type="submit" className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-accentColor hover:bg-accentHover border border-accentSoft">Send message</button>
        </form>
    );
}

export default ContactForm;