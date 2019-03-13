import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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

App.propTypes = {}

App.defaultProps = {}

export default App;