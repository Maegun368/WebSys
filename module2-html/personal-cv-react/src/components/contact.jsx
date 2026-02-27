import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // ensure all fields including message are filled
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <section className="card">
      <h2>CONTACT ME</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

export default Contact;