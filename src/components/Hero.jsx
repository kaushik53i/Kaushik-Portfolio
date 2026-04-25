import "./../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/Profile.png"; 
import resume from "../assets/Resume.pdf";
const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-left">
<h3>Hello, I'm</h3>

<h1>Kaushik Bhowmick</h1>

<h2 className="highlight-role">
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "Frontend Developer",
      2000,
      "Backend Developer",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</h2>

<p>
  I design and develop responsive, scalable, and user-friendly web applications
  using modern technologies like React, JavaScript, and backend systems.
</p>

<div className="hero-buttons">

  <button
    className="btn primary"
    onClick={() => window.location = "#contact"}
  >
    Hire Me
  </button>

  <button
    className="btn secondary"
    onClick={() => window.location = "#projects"}
  >
    View Projects
  </button>

  {/* 🔥 NEW BUTTON */}
<a href={resume} download className="btn resume-btn">
   📄 Download Resume
</a>

</div>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <div className="image-glow"></div>
          <img src={profile} alt="profile" />
        </div>

      </div>

    </section>
  );
};

export default Hero;