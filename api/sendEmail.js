import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({error: "Method is not allowed"});
    }

    try{
        const {fullname, email, message} = req.body;

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "victorokwuwa@gmail.com",
            subject: "New message from your portfolio contact form",
            html: `
                <h1>New message from your portfolio contact form</h1>
                <p><strong>Name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return res.status(200).json({message: "Email sent successfully"});
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({error: "Failed to send email"});
    }
};