import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, message } = req.body;

    await resend.emails.send({
     from: "Your Portfolio <onboarding@resend.dev>",
      to: "vkay543@gmail.com", 
      subject: "New message from your portfolio",
      replyTo: email,
      html: `
        <h2>Message</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      error: "Failed to send email",
    });
  }
}