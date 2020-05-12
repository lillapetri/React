import React, { Component } from 'react';
import BoxList from './BoxList';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div>
        <BoxList />
      </div>
    );
  }
}

export default App;

