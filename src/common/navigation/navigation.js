import React, { Component, Fragment } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
      	<span>212.555.5555</span>
      	<span>LOGIN</span>

      	<div className="navigation__button">
          <span className="navigation__button__top"></span>
          <span className="navigation__button__middle"></span>
          <span className="navigation__button__bottom"></span>
        </div>

        <div className="navigation__overlay" id="overlay">
          <div id="overlay-menu">
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;