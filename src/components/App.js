import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameBoard />
        <Footer />
      </div>
    );
  }
}

export default App;
