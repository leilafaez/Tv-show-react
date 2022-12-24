import React from "react";

const Search=()=>{
    return (
      <form id="form">
        <input
          type="text"
          className="search"
          placeholder="Search"
          id="search"
        />
        <span id="episod-count"></span>
      </form>
    );
}

export default Search;