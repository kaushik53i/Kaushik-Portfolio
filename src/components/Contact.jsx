import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  // ✅ Send to YOU
  emailjs.sendForm(
    "service_mxtwrfn",
    "template_hch7z6f",
    form.current,
    "icrNaX55FAt7Tj1Du"
  )

  // ✅ Auto reply to USER
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
    setStatus("Failed to send message ❌");
  })
  .finally(() => {
    setLoading(false);
  });
};

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit" disabled={loading}> {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;