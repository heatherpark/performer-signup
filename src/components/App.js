import React, { Component } from 'react';
import { Main } from '../components';
import { Header } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
