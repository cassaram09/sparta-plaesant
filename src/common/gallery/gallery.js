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
    author: 'Lorem Ipsum'
  },
  {
    image: Card_2_2_17,
    date: 'FEBRUARY 2 2017',
    title: "Sharo bureaux sleepy K-pop carefully curated.",
    author: 'Lorem Ipsum'
  },
  {
    image: Card_1_27_17,
    date: 'Jannuary 27 2017',
    title: "St Moritz uniforms Beams.",
    author: 'Lorem Ipsum'
  },
  {
    image: Card_1_21_17,
    date: 'JANUARY 21 2017',
    title: "Esse airport veniam ryokan soft power.",
    author: 'Lorem Ipsum'
  },
  {
    image: Card_1_18_17,
    date: 'JANUARY 18 2017',
    title: "K-pop extraordinary.",
    author: 'Lorem Ipsum'
  },
  {
    image: Card_1_12_17,
    date: 'JANUARY 12 2017',
    title: "Artisanal iconic cutting-edge business class.",
    author: 'Lorem Ipsum'
  }
]

const breakPoints = [1162, 768, 500]

class Gallery extends Component {
  state = {
    columnCount: 3
  }

  componentWillMount() {
    window.onresize = e => {
      const width = e.currentTarget.innerWidth

      if ( width => 1000 && this.state.columnCount !== 3) {
         this.setState({ width: width, columnCount: 3 })
      }

      if ( width < 1000 && this.state.columnCount !== 2) {
         this.setState({ width: width, columnCount: 2 })
      }

      if ( width <= 580 && this.state.columnCount !== 1) {
         this.setState({ width: width, columnCount: 1 })
      }
    }
  }

  componentWillUnmount() {
    window.onresize = undefined;
  }

  createColumns = () => {
    const columns = []

    for ( let i = 0; i < cards.length / this.state.columnCount; i++) {
      columns.push(cards.slice(i * this.state.columnCount, (i * this.state.columnCount) + this.state.columnCount))
    }

    return columns[0].map((col, i) => columns.map(row => row[i]));
  }

  renderColumns = () => {
    return this.createColumns().map((c,i) => {
      return(
        <Fragment>
        <div className={`gallery__column__${this.state.columnCount}`}>{this.renderColumn(c)}</div>
        {i + 1 !== this.state.columnCount && <div className="gallery__column__gutter"></div> }
        </Fragment>
      )
    })
  }

  renderColumn = col => col.map(c => c && <Card card={c} />)

  render() {
    return (
      <div className="gallery" >
        {this.renderColumns()}
      </div>
    );
  }
}

export default Gallery;