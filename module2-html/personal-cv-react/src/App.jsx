import { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skill";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  const hours = new Date().getHours();
  const isDaytime = hours > 7 && hours < 20;

  // read preference from localStorage, fall back to daytime calculation
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

  // manage skills visibility
  const [skillsVisible, setSkillsVisible] = useState(true);

  useEffect(() => {
    // sync body class
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // persist preference so it survives reloads
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
        <label htmlFor="toggle" className="toggle-label" title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}></label>
      </div>

      <main className="container">
        <Header skillsVisible={skillsVisible} setSkillsVisible={setSkillsVisible} />
        <Skills visible={skillsVisible} />
        <Education />
        <Contact />
        <p className="footer-text">
          &copy; 2026 Quitoriano Maegun Aixel. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default App;