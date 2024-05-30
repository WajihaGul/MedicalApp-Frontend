import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './ChatApp.css';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Fetch initial messages when component mounts
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages'); // Replace '/api/messages' with your backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data.messages); // Assuming the response contains an array of messages
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async(message) => {
    setMessages([...messages, { text: message, sender: 'doctor' }]);
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message, sender: 'doctor' }),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      // Refresh messages after sending a new message
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  return (
    <div className="chat-app">
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatApp;
