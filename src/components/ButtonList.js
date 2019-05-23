import './ButtonList.css';
import React from 'react';
import Button from './Button';

export default({onClick}) => {
  const terms = [
    "plants",
    "dogs",
    "film",
    "cats",
    "travel",
    "fashion",
    "nature",
    "animals",
    "love",
    "city",
    "happy",
    "sad",
    "hiking",
    "water",
    "coding",
    "work",
    "success"
  ];

  const buttons = terms.map(term => <Button key={term} onClick={onClick} searchTerm={term}/>);
  return <div className="buttons">{buttons}</div>;
};
