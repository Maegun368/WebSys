import { useState } from "react";
import Card from "./card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
    } else {
      alert(`Thank you ${name}! Your message has been sent.`);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <Card title="CONTACT ME">
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
    </Card>
  );
}

export default Contact;