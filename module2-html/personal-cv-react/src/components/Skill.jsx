import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>

      {visible && (
        <section className="card" id="skillsSection">
          <h2>SKILLS</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>
              Web Development
              <ul>
                <li>Frontend</li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Skills; 