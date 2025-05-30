import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WHACLandingPage from './Pages/WHACLandingPage';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<WHACLandingPage />} />
        </Routes>
    </Router>
  )
}

export default App
