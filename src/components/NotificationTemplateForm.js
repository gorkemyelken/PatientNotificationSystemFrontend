import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const NotificationTemplateForm = () => {
  const [template, setTemplate] = useState({
    gender: '',
    minAge: '',
    maxAge: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplate(prevTemplate => ({
      ...prevTemplate,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/notifications/templates', template);
      alert('Notification Template Created Successfully.');
      setTemplate({
        gender: '',
        minAge: '',
        maxAge: '',
        message: ''
      });
    } catch (error) {
      console.error('An error occurred while creating the notification template:', error);
      alert('An error occurred while creating the notification template.');
    }
  };

  return (
    <div>
      <h2>Create Notification Template</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Gender:" 
            name="gender" 
            value={template.gender} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formMinAge">
          <Form.Label>Minimum Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Minimum age:" 
            name="minAge" 
            value={template.minAge} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formMaxAge">
          <Form.Label>Maximum Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Maximum age:" 
            name="maxAge" 
            value={template.maxAge} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Notification message:" 
            name="message" 
            value={template.message} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default NotificationTemplateForm;