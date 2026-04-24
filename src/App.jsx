import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Education from "./components/Education";
import { useEffect } from "react";

function App() {

  // 🔥 Scroll Animation Logic
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

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

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />

      <div className="fade-up">
        <Hero />
      </div>
            <Education />   {/* 👈 ADD HERE */}
      <div className="section-divider"></div>

      <div className="section-divider"></div>

      <div className="fade-up">
        <Services />
      </div>

      <div className="section-divider"></div>

      <div className="fade-up">
        <Stats />
      </div>

      <div className="section-divider"></div>

      <div className="fade-up">
        <Skills />
      </div>

      <div className="section-divider"></div>

      <div className="fade-up">
        <Projects />
      </div>

      <div className="section-divider"></div>

      <div className="fade-up">
        <Contact />
      </div>

      <div className="section-divider"></div>

      <Footer />
    </>
  );
}

export default App;