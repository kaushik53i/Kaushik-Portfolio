import "./../styles/Projects.css";
import studentImg from "../assets/student-management-system-output.png";
import portfolioImg from "../assets/portfolio-website-preview.png";
import trainImg from "../assets/train-ticket-booking-system-output.png";
const Projects = () => {
  const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio built with React featuring animations and responsive design.",
    tech: "React, CSS, JavaScript",
    image: portfolioImg,
    github: "https://github.com/kaushik53i/Kaushik-Portfolio.git",
    live: "https://your-portfolio.netlify.app", // ✅ real link
  },
  {
    title: "Train Ticket Booking System",
    desc: "Console-based system with booking, cancellation, and PNR generation using file handling.",
    tech: "C++, File Handling",
    image: trainImg,
    github: "https://github.com/kaushik53i/Train-Ticket-Booking-System",
    live: null, // ❌ no live
  },
  {
    title: "Student Management System",
    desc: "CRUD-based system using file handling to manage student records.",
    tech: "C",
    image: studentImg,
    github: "https://github.com/kaushik53i/Student-Management-System.git",
    live: null, // ❌ no live
  },
];

  return (
    <section id="projects" className="projects fade-up">
      <h2 className="glow-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card card-hover" key={index}>
            <img src={proj.image} alt="project" />

            <div className="project-content">
              <h3>{proj.title}</h3>

              <p className="project-desc">{proj.desc}</p>

              <p className="tech-stack">{proj.tech}</p>

              <div className="project-buttons">
  <a href={proj.github} target="_blank">GitHub</a>

  {proj.live ? (
    <a href={proj.live} target="_blank">Live</a>
  ) : (
    <span className="no-live">Console App</span>
  )}
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;