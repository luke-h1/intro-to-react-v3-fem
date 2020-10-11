/* eslint-disable */
import React from "react";
import preload from "../data.json";
import showCard from './showCard';
const Search = () => (
  <div className="search">
      {preload.shows.map(show => <showCard {...show} key={show.imdbID} />)}
  </div>
);

export default Search;
