import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    // ✅ 1. Send message to me
    emailjs.sendForm(
      "service_mxtwrfn",
      "template_hch7z6f",   
      form.current,
      "icrNaX55FAt7Tj1Du"
    );

    // ✅ 2. Auto reply to USER
    emailjs.sendForm(
      "service_mxtwrfn",
      "template_o1ui35e",  
      form.current,
      "icrNaX55FAt7Tj1Du"
    )
    .then(() => {
      setStatus("Message sent successfully ✅");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact fade-up">
      <h2 className="glow-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input name="user_name" placeholder="Your Name" required />
        <input name="user_email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default Contact;