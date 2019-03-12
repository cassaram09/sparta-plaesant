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
        <Gallery>
        	 {
    [...Array(12).keys()].map(key => {
      const height = 200 + Math.ceil(Math.random() * 300);
  
      return (
        <div style={{height: `${height}px`}} />
       )
     })
  }
        </Gallery>
        <Footer />
      </div>
    );
  }
}

export default App;