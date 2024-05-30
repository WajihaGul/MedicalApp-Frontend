import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './ChatApp.css';

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'doctor' }]);
  };

  return (
    <div className="chat-app">
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatApp;
