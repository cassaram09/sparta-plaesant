import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Hero1 from 'assets/images/hero_1.png'
import Hero2 from 'assets/images/hero_2.png'
import Hero3 from 'assets/images/hero_3.png'

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
          <img src={Hero1} alt={"Runway photo"} />
          <img src={Hero2} alt={"Feet outside building"} />
          <img src={Hero3} alt={"Girls taking selfie"} />
	    	</Carousel>
      </div>
    );
  }
}

export default Hero;