import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp';
import page_404 from './pages/page_404';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/todos' exact component={TodoApp} />
      <Route component={page_404} />
      </Switch>
    </Router>
  );
}

export default App;
