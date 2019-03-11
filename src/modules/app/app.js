import React, { Component, Fragment } from 'react';
import { Header } from 'common/header';
import { Hero } from 'common/hero';
import { Gallery } from 'common/gallery';
import { Footer } from 'common/footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;