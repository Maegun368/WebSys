import { useState } from "react";
import Card from "./card";

function Works() {
  const [active, setActive] = useState(0);

  const projects = [
    {
      title: "WB Truck Figma Project",
      description: "UI/UX Design with Figma",
      details:
        "Designed an intuitive mobile application interface for truck management, focusing on user efficiency and clear information architecture.",
      image: `${import.meta.env.BASE_URL}image/wb-truck.png`,
      link: "https://www.figma.com/proto/dV90dLp9USChkVIUEN4wyr/Quitoriano_it2r4?node-id=122-2&t=KDdF5SB0o8cPeTOx-1"
    },
    {
      title: "Tetris Game Project",
      description: "UI/UX Design Game Development with Python",
      details:
        "Features a centralized multiplayer lobby designed to efficiently connect players and manage game setup.",
      image: `${import.meta.env.BASE_URL}image/tetris-game.png`,
      link: ""
    },
    {
      title: "Portfolio Website design",
      description: "Modern personal website",
      details:
        "simple portfolio website built with Canva, showcasing my projects and skills in a clean and modern design.",
      image: `${import.meta.env.BASE_URL}image/portfolio.png`,
      link: "https://maixel.my.canva.site/maixel-simple-portfolio"
    }
  ];

  const prev = () => setActive((old) => (old - 1 + projects.length) % projects.length);
  const next = () => setActive((old) => (old + 1) % projects.length);

  return (
    <Card title="WORKS">
      <div className="works-slider">
        <button className="works-nav" type="button" onClick={prev} aria-label="Previous project">
          ←
        </button>

        <div className="works-stage">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`works-item ${index === active ? "active" : "hidden"}`}
              aria-hidden={index !== active}
            >
              <img src={project.image} alt={`Preview ${project.title}`} />
              <div className="works-content">
                <h3>{project.title}</h3>
                <small>{project.description}</small>
                <p>{project.details}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="works-btn">
                  VIEW PROJECT
                </a>
              </div>
            </article>
          ))}
        </div>

        <button className="works-nav" type="button" onClick={next} aria-label="Next project">
          →
        </button>
      </div>

      <div className="works-dots" aria-label="Project navigation">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}

export default Works;
