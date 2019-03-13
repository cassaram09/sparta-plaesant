import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  onNavClick = () => {
    const element = document.querySelector(".navigation__button")
    element.classList.toggle('active');

    const overlay = document.querySelector(".navigation__overlay")
    overlay.classList.toggle('active');
  }

  render() {
    return (
      <div className="navigation">
      	<span className="navigation__phone">212.555.5555</span>
      	<a href="#" className="navigation__login">LOGIN</a>

      	<div className="navigation__button" onClick={this.onNavClick}>
          <span className="navigation__button -top"></span>
          <span className="navigation__button -middle"></span>
          <span className="navigation__button -bottom"></span>
        </div>

        <div className="navigation__overlay">
          <ul>
            <li>Coming soon...</li>
          </ul>
        </div>

      </div>
    );
  }
}

Navigation.propTypes = {}

Navigation.defaultProps = {}

export default Navigation;