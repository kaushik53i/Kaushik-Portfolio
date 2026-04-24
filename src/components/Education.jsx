import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="education-container">

        {/* 🎓 College */}
        <div className="edu-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Panskura Banamali College</p>
          <p>Current Semester: 6</p>
          <p>Current CGPA: 7.48</p>

          <div className="semester">
            <h4>Semester-wise SGPA</h4>
            <ul>
              <li>Sem 1: 7.41</li>
              <li>Sem 2: 5.95</li>
              <li>Sem 3: 8.14</li>
              <li>Sem 4: 8.33</li>
              <li>Sem 5: ***</li>
              <li>Sem 6: ***</li>
            </ul>
          </div>
        </div>

        {/* 📘 Higher Secondary */}
        <div className="edu-card">
          <h3>Higher Secondary (12th)</h3>
          <p>Institution Name: Srikrishnapur Chitraranjan  High School</p>
          <p>Percentage: 86.6%</p>
          <p>Grade: A+</p>
        </div>

        {/* 📗 Secondary */}
        <div className="edu-card">
          <h3>Secondary (10th)</h3>
          <p>Institution Name: Kamina High School</p>
          <p>Percentage: 94%</p>
          <p>Grade: AA</p>
        </div>

      </div>
    </section>
  );
};

export default Education;