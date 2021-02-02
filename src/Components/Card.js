import React from 'react';

const Card = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <img src={props.imgUrl} />
      <p>{props.explanation}</p>
    </div>
  );
};

export default Card;