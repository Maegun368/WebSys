import { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skill";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <button id="themeToggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </button>

      <main className="container">
        <Header />
        <Skills />
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