import React, { Component, Fragment } from 'react';
import Masonry from 'react-masonry-component';

import { Card } from 'common/card';

import Card_2_10_17 from 'assets/images/card_2_10_17.png';
import Card_2_2_17 from 'assets/images/card_2_2_17.png';
import Card_1_27_17 from 'assets/images/card_1_27_17.png';
import Card_1_21_17 from 'assets/images/card_1_21_17.png';
import Card_1_18_17 from 'assets/images/card_1_18_17.png';
import Card_1_12_17 from 'assets/images/card_1_12_17.png';

const masonryOptions = {
  transitionDuration: 250
};

const cards = [
  {
    image: Card_2_10_17,
    date: 'FEBRUARY 10 2017',
    title: "Bureaux exquisite delightful carefully curated soft power.",
    note: 'Presented by Lorem Ipsum'
  },
  {
    image: Card_2_2_17,
    date: 'FEBRUARY 2 2017',
    title: "Sharo bureaux sleepy K-pop carefully curated.",
    note: 'Presented by Lorem Ipsum'
  },
  {
    image: Card_1_27_17,
    date: 'Jannuary 27 2017',
    title: "St Moritz uniforms Beams.",
    note: 'Presented by Lorem Ipsum'
  },
  {
    image: Card_1_21_17,
    date: 'JANUARY 21 2017',
    title: "Esse airport veniam ryokan soft power.",
    note: 'Presented by Lorem Ipsum'
  },
  {
    image: Card_1_18_17,
    date: 'JANUARY 18 2017',
    title: "K-pop extraordinary.",
    note: 'Presented by Lorem Ipsum'
  },
  {
    image: Card_1_12_17,
    date: 'JANUARY 12 2017',
    title: "Artisanal iconic cutting-edge business class.",
    note: 'Presented by Lorem Ipsum'
  }
]

class Gallery extends Component {

  renderCards = () => cards.map(c => <Card card={c} />)

  render() {
    return (
      <div className="gallery">
        <Masonry
          className={'gallery__masonry'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {this.renderCards()}
        </Masonry>
      </div>
    );
  }
}

export default Gallery;