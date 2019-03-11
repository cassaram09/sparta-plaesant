import React, { Component, Fragment } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
      	<span className="navigation__phone">212.555.5555</span>
      	<a href="#" className="navigation__login">LOGIN</a>

      	<a href="#" className="navigation__button">
          <span className="navigation__button -top"></span>
          <span className="navigation__button -middle"></span>
          <span className="navigation__button -bottom"></span>
        </a>

      </div>
    );
  }
}

export default Navigation;