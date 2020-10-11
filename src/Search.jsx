/* eslint-disable */
import React from "react";
import preload from "../data.json";
import showCard from './showCard';
const Search = () => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
      {preload.shows.map(show => <showCard show={show} />)}
  </div>
);

export default Search;
