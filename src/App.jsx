import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // 🔥 ANIMATION CODE HERE
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 👇 UI RETURN
  return (
    <>
      <Navbar />

      <Hero />

      <div className="section-divider"></div>
      <Education className="fade-up" />

      <div className="section-divider"></div>
      <Services className="fade-up" />

      <div className="section-divider"></div>
      <Stats className="fade-up" />

      <div className="section-divider"></div>
      <Skills className="fade-up" />

      <div className="section-divider"></div>
      <Projects className="fade-up" />

      <div className="section-divider"></div>
      <Contact className="fade-up" />

      <Footer />
    </>
  );
}

export default App;