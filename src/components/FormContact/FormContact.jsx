import { useState } from "react";
import styles from "./FormContact.module.css";
import emailjs from "emailjs-com";
import { useI18n } from "../../i18n";

export const Contact = ({ onClose }) => {
  const { t } = useI18n();
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
      alert(t("formContact.emailServiceError"));
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
        alert(t("formContact.messageSent"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert(t("formContact.genericError")))
      .finally(() => setIsSending(false));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t("formContact.title")}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            className={styles.input}
            placeholder={t("formContact.namePlaceholder")}
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
            placeholder={t("formContact.emailPlaceholder")}
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
            placeholder={t("formContact.messagePlaceholder")}
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
              {t("formContact.backButton")}
            </button>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isSending}
            >
              {isSending ? t("formContact.sending") : t("formContact.sendButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
