import React, { Component, Fragment } from 'react';
import { Header } from 'common/header';
import { Hero } from 'common/hero';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />



        <div className="app__gallery">


        </div>

        <div className="app__footer">


        </div>
      </div>
    );
  }
}

export default App;