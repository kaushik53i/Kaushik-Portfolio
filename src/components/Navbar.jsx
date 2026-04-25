import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/Navbar.css";

// ✅ import logo correctly
import logo from "../assets/Icon.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ ONLY ONE scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ✅ fixed logo */}
        <img src={logo} alt="logo" className="logo-img" />

        <ul className="nav-links">
          <li className={active==="home"?"active":""} onClick={()=>scrollToSection("home")}>Home</li>
          <li className={active==="education"?"active":""} onClick={()=>scrollToSection("education")}>Education</li>
          <li className={active==="services"?"active":""} onClick={()=>scrollToSection("services")}>Services</li>
          <li className={active==="skills"?"active":""} onClick={()=>scrollToSection("skills")}>Skills</li>
          <li className={active==="projects"?"active":""} onClick={()=>scrollToSection("projects")}>Projects</li>
          <li className={active==="contact"?"active":""} onClick={()=>scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <p onClick={()=>scrollToSection("home")}>Home</p>
          <p onClick={()=>scrollToSection("education")}>Education</p>
          <p onClick={()=>scrollToSection("services")}>Services</p>
          <p onClick={()=>scrollToSection("skills")}>Skills</p>
          <p onClick={()=>scrollToSection("projects")}>Projects</p>
          <p onClick={()=>scrollToSection("contact")}>Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;