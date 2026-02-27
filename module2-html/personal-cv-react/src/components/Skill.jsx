function Skills({ visible }) {
  return (
    <>

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