import React, { Component, Fragment } from 'react';

import logo from "assets/logo/logo.png"

const Logo = () => {
  return (
    <div className="logo">
     	<img src={logo} alt="Logo" className="logo__img" />
    </div>
  );
}

export default Logo;