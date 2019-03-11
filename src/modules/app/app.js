import React, { Component, Fragment } from 'react';
import Logo from "../../assets/logo/logo.svg"
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={Logo} alt="Logo" className="app__logo" />
        </div>
        <div className="app__carousel">

        </div>



        <div className="app__gallery">


        </div>

        <div className="app__footer">


        </div>
      </div>
    );
  }
}

export default App;