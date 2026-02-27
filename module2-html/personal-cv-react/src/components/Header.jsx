function Header({ skillsVisible, setSkillsVisible }) {
    return (
      <>
      <section className="card">
        <img src={`${import.meta.env.BASE_URL}pfp.png`} className="profile-2x2" alt="Profile Picture" />
        <section>
          <h1>MAEGUN</h1>
          <p style={{ textAlign: "center" }}>Hi, I'm Maegun Aixel J. Quitoriano. I enjoy learning, building, and challenging myself in different areas. 
              I thrive near deadlines and consistently convert high pressure moments into high quality outcomes.</p>
        </section>
      </section>

      <section className="card">
        <p style={{ textAlign: "center" }}>
          Email:{" "}
          <a href="mailto:Quitoriano.maegunaixel@gmail.com">
            Quitoriano.maegunaixel@gmail.com
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          GitHub:{" "}
          <a href="https://github.com/Maegun368" target="_blank" rel="noreferrer">
            github.com/Maegun368
          </a>
        </p>
        <button onClick={() => setSkillsVisible(!skillsVisible)}>
        {skillsVisible ? "Hide Skills" : "Show Skills"}
      </button> 
      </section>

      </>
    );
  }
  
  export default Header; 