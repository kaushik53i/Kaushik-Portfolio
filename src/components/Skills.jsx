import "./../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },

  { name: "Java", level: 75 },
  { name: "C++", level: 85 },
  { name: "Python", level: 70 },

  { name: "DBMS", level: 70 },
  { name: "Git & GitHub", level: 70 },
  { name: "Microsoft Office", level: 90 },

  { name: "Node.js", level: 65 },
  { name: "Express.js", level: 60 },
  { name: "SQL", level: 70 },

  { name: "Responsive Design", level: 80 },
  { name: "UI/UX Basics", level: 70 },

  { name: "VS Code", level: 90 },
  { name: "Git Workflow", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills fade-up">
      <h2 className="glow-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;