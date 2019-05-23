import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    term: ''
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
