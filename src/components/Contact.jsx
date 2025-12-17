// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ancwaef", // 🔁 Replace with your actual Service ID
        "template_y290oka", // 🔁 Replace with your actual Template ID
        form.current,
        "shInnfTLYf5ZIi6XA" // 🔁 Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset(); // Clear form after sending
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-intro">
        I'm always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>📬 Get in Touch</h2>
          <p>
            <strong>Email:</strong>pbora3112@gmail.com
          </p>
          <p>
            <strong>Phone:</strong>9012502312
          </p>
          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
          </p>
          <p>
            <strong>GitHub:</strong> github.com/yourusername
          </p>
          <p>
            <strong>Location:</strong> NCR, India
          </p>
        </div>

        <div className="contact-form">
          <h2>📧 Send a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
          {sent && (
            <p className="success-message">✅ Message sent successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
