import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NotificationTemplateForm from './components/NotificationTemplateForm';
import NotificationTemplateList from './components/NotificationTemplateList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/create">Create a Template</Link>
            </li>
            <li>
              <Link to="/list">Templates</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/create" element={<NotificationTemplateForm />} />
          <Route path="/list" element={<NotificationTemplateList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
