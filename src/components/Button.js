import React from 'react';

export default({onClick, searchTerm}) => {
  return (<button className="ui button mini" onClick={() => onClick(searchTerm)}>
    {searchTerm}
  </button>);
}
