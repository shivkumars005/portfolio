import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ darkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className={`p-4 rounded-4 ${
        darkMode ? "bg-dark text-light border border-secondary" : "bg-white shadow-sm"
      }`}
    >
      <h4 className="fw-bold mb-4">Send a Message</h4>
      <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3">
        <div className="form-group">
          <label htmlFor="user_name" className="form-label">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className={`form-control ${darkMode ? "bg-dark text-light border-secondary" : ""}`}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email" className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className={`form-control ${darkMode ? "bg-dark text-light border-secondary" : ""}`}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            name="message"
            id="message"
            className={`form-control ${darkMode ? "bg-dark text-light border-secondary" : ""}`}
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
        {status && <div className="mt-2 text-center text-info">{status}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
