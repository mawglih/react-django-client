import React, { Component } from 'react';
import Route from 'routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    );
  }
}

export default App;
