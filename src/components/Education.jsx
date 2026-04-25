import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education fade-up" id="education">
      <h2 className="glow-title">Education</h2>

      <div className="education-container">

        {/* 🎓 College */}
        <div className="edu-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>

          <p>
            <span className="label">Institution:</span>{" "}
            Panskura Banamali College
          </p>

          <p>
            <span className="label">Current Semester:</span>{" "}
            <span className="value">6</span>
          </p>

          <p>
            <span className="label">Current CGPA:</span>{" "}
            <span className="value">7.48</span>
          </p>

          <div className="semester">
            <h4>Semester-wise SGPA</h4>
            <ul>
              <li>Sem 1: <span>7.41</span></li>
              <li>Sem 2: <span>5.95</span></li>
              <li>Sem 3: <span>8.14</span></li>
              <li>Sem 4: <span>8.33</span></li>
              <li>Sem 5: <span>***</span></li>
              <li>Sem 6: <span>***</span></li>
            </ul>
          </div>
        </div>

        {/* 📘 Higher Secondary */}
        <div className="edu-card">
          <h3>Higher Secondary (12th)</h3>

          <p>
            <span className="label">Institution:</span>{" "}
            Srikrishnapur Chitraranjan High School
          </p>

          <p>
            <span className="label">Percentage:</span>{" "}
            <span className="value">86.6%</span>
          </p>

          <p>
            <span className="label">Grade:</span>{" "}
            <span className="value">A+</span>
          </p>
        </div>

        {/* 📗 Secondary */}
        <div className="edu-card">
          <h3>Secondary (10th)</h3>

          <p>
            <span className="label">Institution:</span>{" "}
            Kamina High School
          </p>

          <p>
            <span className="label">Percentage:</span>{" "}
            <span className="value">94%</span>
          </p>

          <p>
            <span className="label">Grade:</span>{" "}
            <span className="value">AA</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;