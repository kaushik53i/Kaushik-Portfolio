import "./../styles/Services.css";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive UI using React, HTML, CSS, and JavaScript.",
    },
    {
      title: "Backend Development",
      desc: "Creating APIs and server-side logic using Node.js and databases.",
    },
    {
      title: "Full Stack Projects",
      desc: "Developing complete web applications with frontend and backend integration.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">What I Do</h2>

      <div className="services-container">
        {services.map((item, index) => (
          <div className="service-card card-hover" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;