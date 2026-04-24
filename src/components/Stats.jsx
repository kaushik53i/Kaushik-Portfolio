import "./../styles/Stats.css";

const Stats = () => {
  const data = [
    { number: "10+", label: "Projects Completed" },
    { number: "340+", label: "Coding Hours" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <section id="stats" className="stats">
      <div className="stats-container">
        {data.map((item, index) => (
          <div className="stat-card" key={index}>
            <h1>{item.number}</h1>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;