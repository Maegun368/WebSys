function Header() {
    return (
      <section className="card">
        <img src={`${import.meta.env.BASE_URL}pfp.png`} className="profile-2x2" alt="Profile Picture" />
        <section>
          <h1>Quitoriano, Maegun Aixel J.</h1>
          <p style={{ textAlign: "center" }}>IT Student | WEB SYSTEMS AND TECHNOLOGIES</p>
        </section>
        <h2>ABOUT ME</h2>
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
        <p style={{ textAlign: "center" }}>
          Hello! My name is Maegun, I like to play games.
        </p>
      </section>
    );
  }
  
  export default Header; 