import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Logo } from 'common/logo';
import { Navigation } from 'common/navigation';

class Header extends Component {
  state = {
    scroll: 0,
    resized: false
  }

  componentDidMount() {
    window.onscroll = this.onScroll;
  }

  componentWillUnmount() {
    window.onscroll = undefined;
  }

  onScroll = () => {
    const el = document.scrollingElement || document.documentElement
    const scroll = el.scrollTop

    if (scroll >= 120 && !this.state.resized) {
      document.querySelector(".header__container").classList.toggle("small")
      this.setState({ resized: true })
    }

    if (scroll < 120 && this.state.resized) {
      document.querySelector(".header__container").classList.toggle("small")
      this.setState({ resized: false })
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__blocker"></div>
      	<div className="header__container">
          <div className="header__container__inner container">
        		<Logo />
        		<Navigation />
          </div>
      	</div>
      </div>
    );
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header;