import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomLoader from './Components/CustomLoader';

const WHACLandingPage = lazy(() => import('./Pages/WHACLandingPage'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Content = lazy(() => import('./Pages/Content'));

function App() {

  return (
    <Router>
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route path="/" element={<WHACLandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content/:id" element={<Content />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
