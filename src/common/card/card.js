import React, { Component, Fragment } from 'react';

const Card = ({ card }) => {
	const { image, date, title, note } = card;
  return(
    <div className="card">
    	<img src={image} className="card__image" />
    	<div className="card__content-container">
    		<span className="card__date">{date}</span>
    		<h2 className="card__title">{title}</h2>
    		<span className="card__note">{note}</span>
    	</div>
    </div>
  )
}

export default Card;