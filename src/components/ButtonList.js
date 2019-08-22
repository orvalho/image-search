import './ButtonList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonList = ({onClick}) => {
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

ButtonList.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonList;