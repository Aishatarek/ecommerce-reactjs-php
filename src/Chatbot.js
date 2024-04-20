import React, { useState } from 'react';
import { detectIntent } from './dialogflow'; // Function to interact with Dialogflow

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat history
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Send user message to Dialogflow and get bot response
    const botResponse = await detectIntent(input);

    // Add bot response to chat history
    setMessages([...messages, { text: botResponse, sender: 'bot' }]);

    // Clear input field
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
