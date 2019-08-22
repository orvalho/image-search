import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, searchTerm}) => {
  return (<button className="ui button mini" onClick={() => onClick(searchTerm)}>
    {searchTerm}
  </button>);
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default Button;