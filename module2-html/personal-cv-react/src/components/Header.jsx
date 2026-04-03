import Card from "./card";

function Header({ skillsVisible, setSkillsVisible }) {
  return (
    <>
      <section className="card">
        <img src={`${import.meta.env.BASE_URL}pfp.png`} className="profile-2x2" alt="Profile Picture" />
        <section>
          <h1>MAEGUN</h1>
          <p style={{ textAlign: "center" }}>
            Hi, I'm Maegun Aixel J. Quitoriano. I enjoy learning, building, and challenging myself in different areas.
            I thrive near deadlines and consistently convert high pressure moments into high quality outcomes.
          </p>

          <div className="social-icons" aria-label="Social links">
            <a
              className="icon-btn"
              href="mailto:Quitoriano.maegunaixel@gmail.com"
              aria-label="Send Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://instagram.com/_aixx.l/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://github.com/Maegun368"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5a3.5 3.5 0 0 0 -1.025 -2.475a3.5 3.5 0 0 1 1.025 -2.475"></path>
                <path d="M12 19h9"></path>
                <path d="M12 3a6 6 0 0 0 -3.5 1.015a6 6 0 0 0 -3 8.138a6 6 0 0 0 1.025 2.475"></path>
                <path d="M12 3v16.5"></path>
              </svg>
            </a>
            <button
              type="button"
              className="icon-btn toggle-btn"
              onClick={() => setSkillsVisible(!skillsVisible)}
              aria-expanded={skillsVisible}
              aria-controls="skillsSection"
            >
              {skillsVisible ? "Hide" : "Show"}
            </button>
          </div>
        </section>
      </section>

    </>
  );
}

export default Header;