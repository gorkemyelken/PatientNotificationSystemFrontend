import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const NotificationTemplateList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('/api/notifications/templates');
      setTemplates(response.data);
    } catch (error) {
      console.error('An error occurred while retrieving notification templates:', error);
    }
  };

  return (
    <div>
      <h2>Notification Templates</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Gender</th>
            <th>Minimum Age</th>
            <th>Maximum Age</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template, index) => (
            <tr key={template.id}>
              <td>{index + 1}</td>
              <td>{template.gender}</td>
              <td>{template.minAge}</td>
              <td>{template.maxAge}</td>
              <td>{template.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NotificationTemplateList;