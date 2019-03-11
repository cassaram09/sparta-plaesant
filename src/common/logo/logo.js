import React, { Component, Fragment } from 'react';
import logo from "assets/logo/logo.svg"

class Logo extends Component {
  render() {
    return (
      <div className="logo">
       	<img src={logo} alt="Logo" className="logo__img" />
      </div>
    );
  }
}

export default Logo;