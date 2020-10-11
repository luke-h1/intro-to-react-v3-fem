/* eslint-disable */
import React, { Component } from 'react';
import ShowCard from './showCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: '',
  };
  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    // HAPPENS ONCE IN CONSTRUCTOR & WORKS FOREVER AFTER...
    // GUARANTEES IT WILL BE IN THE CORRECT CONTEXT
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Svideo</h1>
          <input
            type="text"
            placeholder="search..."
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {preload.shows.map((show) => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    );
  }
}
export default Search;
