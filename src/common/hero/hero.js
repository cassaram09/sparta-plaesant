import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
      	<div className="hero__text container">
          <div className="hero__text__inner">
        		<h1>Screening: <br/>DVF Secret Agent Part 2</h1>
        		<h3>October 15, 2017</h3>
        		<p>Join us for a private screening of DVF Secret Agent Part 2<br/>with our special guest, director Peter Lindberg.</p>
          </div>
      	</div>
       	<Carousel
       		showArrows={false}
       		showThumbs={false}
       		showStatus={false}
       		infiniteLoop={true}
       		autoPlay={true}
       		interval={5000}
          transitionTime={500}
          stopOnHover={false}
       	>
          <img src="https://cnet4.cbsistatic.com/img/DtSrStRVmFiah7YNTrJV3_dOBH4=/970x0/2018/11/21/a502f3f1-2a07-4f3c-966a-3ad7b3d6134e/rivian-r1t-11.jpg" />
          <img src="https://i.kinja-img.com/gawker-media/image/upload/s--xBUTOaFk--/c_scale,f_auto,fl_progressive,q_80,w_800/sptinjuhtlhfwadlp1oy.jpg" />
          <img src="https://i.ytimg.com/vi/OGB3wufxrj8/maxresdefault.jpg" />
	    	</Carousel>
      </div>
    );
  }
}

export default Hero;