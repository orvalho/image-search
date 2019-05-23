import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import ButtonList from './ButtonList';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

export default class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    this.setState({images: response.data.results});
  }

  componentDidMount() {
    this.onSearchSubmit('flowers'); // default
  }

  render() {
    return (<div className="app ui container">
      <div className="ui segment">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <ButtonList onClick={this.onSearchSubmit}/>
      </div>
      <h1>Beautiful photos</h1>
      <ImageList images={this.state.images}/>
    </div>);
  }
}
