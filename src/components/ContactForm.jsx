import { useState } from "react";

import FormFeedback from "./FormFeedback";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess(true);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
      <FormFeedback
        isSubmitting={isSubmitting}
        error={error}
        success={success}
      />

      <div className="w-full grid grid-col-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          name="full-name"
          placeholder="Full Name"
          className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <textarea
        type="text"
        name="message"
        rows="5"
        placeholder="Write your message"
        className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-cardBg border border-accentSoft"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      ></textarea>

      <button
        type="submit"
        className="w-full px-3 py-4 rounded-xl text-base text-primaryText bg-accentColor hover:bg-accentHover border border-accentSoft"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
