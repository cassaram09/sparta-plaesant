import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import logo from "assets/logo/logo.png"

const Logo = () => {
  return (
    <div className="logo">
     	<img src={logo} alt="Logo" className="logo__img" />
    </div>
  );
}

Logo.propTypes = {}

Logo.defaultProps = {}

export default Logo;