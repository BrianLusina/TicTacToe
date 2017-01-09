import React, { Component } from 'react';
import logo from './logo.svg';
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
