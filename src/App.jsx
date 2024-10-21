import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WebDevelopmentPage from './pages/web-development';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

