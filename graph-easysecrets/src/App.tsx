import React from 'react';
import './App.css';

//lib de rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components de páginas
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route 
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </Router>
  );
}

export default App;
