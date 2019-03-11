import React, { Component, Fragment } from 'react';
import { Logo } from 'common/logo';
import { Navigation } from 'common/navigation';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<div className="header__container container">
      		<Logo />
      		<Navigation />
      	</div>
      </div>
    );
  }
}

export default Header;