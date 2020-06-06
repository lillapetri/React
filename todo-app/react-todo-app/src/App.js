import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateTodo from './todoModifiers/CreateTodo';
import Navbar from './Navbar';
import TodoApp from './TodoApp';
import TodoAppTest from './TodoAppTest';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={TodoAppTest} /> 
      
    </Router>
  );
}

export default App;
