import { useState } from "react";
import styles from "./FormContact.module.css";
import emailjs from "emailjs-com";

export const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (
      !import.meta.env.VITE_SERVICE_ID ||
      !import.meta.env.VITE_TEMPLATE_ID ||
      !import.meta.env.VITE_PUBLIC_KEY
    ) {
      alert("Email service is not configured properly.");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."))
      .finally(() => setIsSending(false));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Get In Touch</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            className={styles.input}
            placeholder="Name..."
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            required
            className={styles.input}
            placeholder="your_email@gmail.com"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            value={formData.email}
          />
          <textarea
            name="message"
            required
            rows={4}
            className={styles.textarea}
            placeholder="Your Message..."
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            value={formData.message}
          />
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.backButton}
              onClick={onClose}
            >
              Back
            </button>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
