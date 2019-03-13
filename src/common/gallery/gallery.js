import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'common/card';

import Card_2_10_17 from 'assets/images/card_2_10_17.png';
import Card_2_2_17 from 'assets/images/card_2_2_17.png';
import Card_1_27_17 from 'assets/images/card_1_27_17.png';
import Card_1_21_17 from 'assets/images/card_1_21_17.png';
import Card_1_18_17 from 'assets/images/card_1_18_17.png';
import Card_1_12_17 from 'assets/images/card_1_12_17.png';

const cards = [
  {
    id: 1,
    image: Card_2_10_17,
    date: 'FEBRUARY 10 2017',
    title: "Bureaux exquisite delightful carefully curated soft power.",
    author: 'Lorem Ipsum'
  },
  {
    id: 2,
    image: Card_2_2_17,
    date: 'FEBRUARY 2 2017',
    title: "Sharo bureaux sleepy K-pop carefully curated.",
    author: 'Lorem Ipsum'
  },
  {
    id: 3,
    image: Card_1_27_17,
    date: 'Jannuary 27 2017',
    title: "St Moritz uniforms Beams.",
    author: 'Lorem Ipsum'
  },
  {
    id: 4,
    image: Card_1_21_17,
    date: 'JANUARY 21 2017',
    title: "Esse airport veniam ryokan soft power.",
    author: 'Lorem Ipsum'
  },
  {
    id: 5,
    image: Card_1_18_17,
    date: 'JANUARY 18 2017',
    title: "K-pop extraordinary.",
    author: 'Lorem Ipsum'
  },
  {
    id: 6,
    image: Card_1_12_17,
    date: 'JANUARY 12 2017',
    title: "Artisanal iconic cutting-edge business class.",
    author: 'Lorem Ipsum'
  }
]

class Gallery extends Component {
  state = {
    columnCount: 3
  }

  componentWillMount() {
    window.onresize = this.getColumnCount;

    this.calculateColumns(window.innerWidth)
  }

  getColumnCount = e => {
    this.calculateColumns(e.currentTarget.innerWidth)
  }

  calculateColumns = width => {
    if ( width => 1000 && this.state.columnCount !== 3) {
      this.setState({ width: width, columnCount: 3 })
    }

    if ( width < 1000 && this.state.columnCount !== 2) {
      this.setState({ width: width, columnCount: 2 })
    }

    if ( width <= 320&& this.state.columnCount !== 1) {
      this.setState({ width: width, columnCount: 1 })
    }
  }
  componentWillUnmount() {
    window.onresize = undefined;
  }

  createColumns = () => {
    const columns = []
    const columnCount = this.state.columnCount;

    for ( let i = 0; i < cards.length / columnCount; i++) {
      columns.push(cards.slice(i * columnCount, (i * columnCount) + columnCount))
    }

    return columns[0].map((col, i) => columns.map(row => row[i]));
  }

  renderColumns = () => {
    return this.createColumns().map((c,i) => {
      return(
        <Fragment key={i} >
          <div className={`gallery__column__${this.state.columnCount}`} >{this.renderColumn(c)}</div>
          {i + 1 !== this.state.columnCount && <div className="gallery__column__gutter"></div> }
        </Fragment>
      )
    })
  }

  renderColumn = col => col.map(c => c && <Card card={c} key={c.id} />)

  render() {
    return (
      <div className="gallery" >
        {this.renderColumns()}
      </div>
    );
  }
}

Gallery.propTypes = {}

Gallery.defaultProps = {}

export default Gallery;