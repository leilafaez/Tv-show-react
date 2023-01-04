import React from "react";

const Search=({content,setContent})=>{
  let handleSearch=(event)=>{
    let value= event.target.value;
    setContent(content.filter((element)=>{
      if(element.genres){
        const genres = element.genres.join(" ").toLowerCase();
        return(element.name.toLowerCase().includes(value)||
        element.summary.toLowerCase().includes(value)||
        genres.includes(value));
      }else {
        return(element.name.toLowerCase().includes(value)||
        element.summary.toLowerCase().includes(value))
      }
    }))
  }
    return (
      <form id="form">
        <input
          type="text"
          className="search"
          placeholder="Search"
          id="search"
          onKeyUp={handleSearch}
        />
        <span id="episod-count"></span>
      </form>
    );
}

export default Search;