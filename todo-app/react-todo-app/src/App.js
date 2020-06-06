import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import TodoAppTest from './TodoAppTest';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={LandingPage} />
      <Route path='/todos' exact component={TodoAppTest} />
    </Router>
  );
}

export default App;
