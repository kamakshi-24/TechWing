import React, { useState } from 'react';

function FarmerChatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Namaste! I am FarmBot. How can I assist you with your farm today?' }
  ]);
  const [input, setInput] = useState('');

  // Simple AI response logic - can be replaced with real AI integration
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('pest')) {
      return 'I detected you want to know about pests. Please describe the pest or symptoms on your crops.';
    }
    if (msg.includes('irrigation')) {
      return 'For irrigation issues, please check your soil moisture levels and timing. I can help schedule drone watering if you want.';
    }
    if (msg.includes('drone')) {
      return 'Our drones can help with pesticide spraying and crop monitoring. Would you like to know how to book a service?';
    }
    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I help your farm today?';
    }
    if (msg.includes('thank')) {
      return 'You’re welcome! If you have more questions, feel free to ask.';
    }
    return 'I am here to help! Could you please provide more details or ask about pests, irrigation, or drone services?';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);

    // Simulate AI response after short delay
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>FarmBot Chatbot</h3>

      <div style={{
        border: '1px solid #ddd',
        borderRadius: '6px',
        height: '300px',
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#fafafa'
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              margin: '8px 0',
              padding: '8px 12px',
              borderRadius: '15px',
              backgroundColor: msg.sender === 'user' ? '#cfe9ff' : '#dfffd6',
              maxWidth: '75%',
              marginLeft: msg.sender === 'bot' ? '0' : 'auto'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={input}
          placeholder="Ask your farm question..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '6px 0 0 6px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '8px 16px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '16px',
            borderRadius: '0 6px 6px 0',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default FarmerChatbot;