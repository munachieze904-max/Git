import React, { useState } from 'react'

function App() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message to your email address
    const data = {
      name: name,
      email: email,
      message: message
    };
    console.log(data); // You can replace this with code to send the data to your email
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <input type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
      <textarea placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default App