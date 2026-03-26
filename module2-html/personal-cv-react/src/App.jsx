import { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skill";
import Education from "./components/education";
import Contact from "./components/contact";

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
    program: "Kindergarten ",
    school: "Cugman Elementary School",
    year: "2010",
  },
  {
    program: "Grade School",
    school: "Gusa Elementary School",
    year: "20--",
  },
  {
    program: "Junior High School",
    school: "Cugman National High School",
    year: "20--",
  },
  {
    program: "Senior High School",
    school: "Southern Philippines College",
    year: "20--",
  },
  {
    program: "College",
    school: "USTP - CDO Campus",
    year: "20--",
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
        {/* Task 1: pass skills as props */}
        <Skills visible={skillsVisible} skills={skills} />
        {/* Task 3: pass education as props */}
        <Education education={education} />
        <Contact />
        <p className="footer-text">
          &copy; 2026 Quitoriano Maegun Aixel. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default App;