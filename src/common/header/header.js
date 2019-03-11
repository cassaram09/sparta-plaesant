import React, { Component, Fragment } from 'react';
import { Logo } from 'common/logo';
import { Navigation } from 'common/navigation';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<Logo />
      	<Navigation />
      </div>
    );
  }
}

export default Header;