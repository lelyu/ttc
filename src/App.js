import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OperationMenu from './components/operation_menu';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the teaching tools collection</h1>
        <Routes>
          <Route path="/operation-menu" element={<OperationMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
