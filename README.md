# Patient Notification Frontend

Patient Notification Frontend is a React application designed to interact with Patient Service and Notification Service APIs. It provides a user interface to manage notification templates, view patient details, and send notifications based on predefined criteria.

## Technologies

- React
- React Router DOM
- Axios (for API requests)
- Bootstrap (or any other UI framework)

## Features

- View and manage notification templates.
- Display patient details fetched from Patient Service.
- Send notifications to patients based on defined criteria.
- Integrate with Patient Service and Notification Service APIs.

## Installation

Install dependencies using npm:
npm install

## Configuration

Set the API base URLs in src/config.js file:
const API_BASE_URL = {
  patientService: 'http://localhost:8080/api',
  notificationService: 'http://localhost:8081/api',
};

export default API_BASE_URL;

## Running the Application

Start the React application:
npm start

The application will run on http://localhost:3000. Open this URL in your browser to access the frontend.

## Usage

- View Notification Templates: Navigate to the templates page to view existing notification templates.
- Manage Templates: Create new templates, update existing ones, or delete templates as needed.
- Send Notifications: Use the notification sending feature to send notifications based on predefined criteria.






