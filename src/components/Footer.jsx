import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk,FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Kaushik Bhowmick</h2>
      <p>Full Stack Developer</p>
      <div className="social-links">
        <a href="https://github.com/kaushik53i" target="_blank">
          <FaGithub  size={50}/>
        </a>

        <a href="https://www.linkedin.com/in/kaushik-bhowmick-ba841a323" target="_blank">
          <FaLinkedin size={50} />
        </a>

        <a href="https://www.facebook.com/share/18Ek4ZD1dp/" target="_blank">
          <FaFacebook size={50} />
        </a>

        <a href="https://www.instagram.com/kaushikbhowmick12?igsh=M2UybW1tZmZ3ZzRr" target="_blank">
          <FaInstagram size={50} />
        </a>

        <a href="https://wa.me/918017452821" target="_blank">
          <FaWhatsapp size={50} />
        </a>

        <a href="mailto:kaushikbhowmick53@gmail.com" target="_blank">
          <FaEnvelope size={50}/>
          </a>
      </div>

      <p className="footer-text">
        © 2026 Kaushik Bhowmick. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;