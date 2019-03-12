import React, { Component, Fragment } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
    		<span className="footer__copyright">&copy; 2017 - Sparta Plaesant</span>&nbsp;-&nbsp;
    		<a className="footer__social-link -instagram" href="#">Instagram</a>&nbsp;-&nbsp;
    		<a className="footer__social-link -facebook" href="#">Facebook</a>&nbsp;-&nbsp;
    		<a className="footer__social-link -twitter" href="#">Twitter</a>
      </div>
    );
  }
}

export default Footer;