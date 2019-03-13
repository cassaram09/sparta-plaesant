import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Hero1 from 'assets/images/hero_1.png'
import Hero2 from 'assets/images/hero_2.png'
import Hero3 from 'assets/images/hero_3.png'

const SLIDE_INFO = [
  {
    type: "Screening:",
    title: "DVF Secret Agent Part 2",
    date: "October 15, 2017",
    subtitle: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.",
    image: Hero1,
    alt: "Runway"
  },
  {
    type: "Screening:",
    title: "DVF Secret Agent Part 3",
    date: "October 16, 2017",
    subtitle: "Join us for a private screening of DVF Secret Agent Part 3 with our special guest, director Peter Lindberg.",
    image: Hero2,
    alt: "Feet outside building"
  },
  {
    type: "Screening:",
    title: "DVF Secret Agent Part 4",
    date: "October 17, 2017",
    subtitle: "Join us for a private screening of DVF Secret Agent Part 4 with our special guest, director Peter Lindberg.",
    image: Hero3,
    alt: "Girls taking selfie"
  }
]

class Hero extends Component {
  renderSlides = () => {
    return SLIDE_INFO.map(s => (
      <div className="hero__slide">
        <img src={s.image} alt={s.alt} />
        <div className="hero__slide__overlay"></div>
        <div className="hero__text container">
          <div className="hero__text__inner">
            <h1>{s.type}</h1>
            <h1>{s.title}</h1>
            <h3>{s.date}</h3>
            <p>{s.subtitle}</p>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="hero">
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
         {this.renderSlides()}
	    	</Carousel>
      </div>
    );
  }
}

export default Hero;