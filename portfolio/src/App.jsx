import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

  const projects = [
    { title: "To-Do List App", desc: "Task manager with reordering and completion tracking." },
    { title: "University Finder", desc: "Fetches country-wise universities using public REST API." },
    { title: "E-Commerce Store", desc: "Full stack shopping website with cart and seller panel." }
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <div className="container">
      <header>
        <h1>Shivam Sharma</h1>
        <p>MCA Student | Full Stack Web Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am an MCA student interested in building simple and practical web applications
          using the MERN stack.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, index) => (
            <div key={index} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {submitted && <p className="success">Thank you! Your message has been sent.</p>}
      </section>
    </div>
  );
}

export default App;