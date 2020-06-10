import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import TodoApp from './TodoApp';
import page_404 from './pages/page_404';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import {LoginProvider, LoginContext} from './contexts/LoginContext';

function App() {
  return (
    <Router>
    <LoginProvider>
      <Navbar />
      <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/todos' exact component={TodoApp} />
      <Route path='/signup' exact component={SignUpPage} />
      <Route path='/login' exact component={LoginPage} />
      <Route component={page_404} />
      </Switch>
      </LoginProvider>
    </Router>
  );
}

export default App;
