import { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skill";
import Education from "./components/education";
import Contact from "./components/contact";
import Works from "./components/works";

// Task 1: Skills data array
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Web Development - Frontend",
  "Web Development - Backend",
  "Hard Coder Prompt Master",
];

// Task 3: Education data array
const education = [
  {
    program: "Kinder",
    school: "Cugman Elementary School",
    year: "2010",
  },
  {
    program: "Grade School",
    school: "Gusa Elementary School",
    year: "2016",
  },
  {
    program: "STEM",
    school: "Southern Philippines College",
    year: "2023",
  },
  {
    program: "CITC",
    school: "USTP - CDO Campus",
    year: "2028",
  },
];

function App() {
  const hours = new Date().getHours();
  const isDaytime = hours > 7 && hours < 20;

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore malformed value
    }
    return !isDaytime;
  });

  const [skillsVisible, setSkillsVisible] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch {
      // ignore storage errors
    }
  }, [darkMode]);

  return (
    <>
      <div className="theme-toggle-wrapper">
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label
          htmlFor="toggle"
          className="toggle-label"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        ></label>
      </div>

      <main className="container">
        <Header skillsVisible={skillsVisible} setSkillsVisible={setSkillsVisible} />

        <div className={`content-grid ${skillsVisible ? 'with-skills' : 'no-skills'}`}>
          <Education education={education} />
          <Skills visible={skillsVisible} skills={skills} />
        </div>

        <Works />

        <Contact />
        <p className="footer-text">
          &copy; 2026 Quitoriano Maegun Aixel. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default App;