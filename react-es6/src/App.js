import React, { Component } from 'react';
import People from './examples/loading/people';
import Container from './examples/components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <People />
        {/*<Container/>*/}
      </div>
    );
  }
}

export default App;
