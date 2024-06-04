import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import './ChatComponent.css';

const ChatComponent = ({ backendUrl }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('User1'); // Assuming static username for simplicity

  useEffect(() => {
    // Fetch initial messages from backend
    fetch(`${backendUrl}/messages`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, [backendUrl]);

  const sendMessage = async (message) => {
    if (!message) return;
    const newMessage = {
      sender: username,
      content: message,
      timestamp: new Date().toISOString()
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Send message to backend
    try {
      await fetch(`${backendUrl}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <Container className="chat-container">
      <Row>
        <Col>
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === username ? 'sent' : 'received'}`}>
                <div className="message-content">{msg.content}</div>
                <div className="message-meta">{msg.sender} - {new Date(msg.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
          <Form onSubmit={handleSubmit} className="message-form">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button type="submit" variant="primary">Send</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatComponent;

