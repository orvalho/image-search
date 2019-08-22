import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  state = {
    term: ''
  };

  static propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
  };
  
  onInputChange = e => this.setState({term: e.target.value});

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (<form className="ui form" onSubmit={this.onFormSubmit}>
      <div className="field">
        <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="image search"/>
      </div>
    </form>);
  }
};
