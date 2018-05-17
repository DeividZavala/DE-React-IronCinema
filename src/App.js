import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import MovieContainer from './components/MovieContainer'
import { Routes } from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;