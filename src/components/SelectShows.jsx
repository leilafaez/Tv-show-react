import React from "react";
import {allShows} from "../data/shows";


const SelectShows = ({ setContent, handleVisible ,setShowId}) => {

  const fetchData = async (id) => {
    const result = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    const data = await result.json();
    setContent(data);
  };
  
  let handleSelectShowChange = (event) => {
    let selectedValue = event.target.value;
    if(selectedValue==="allShows"){
      setContent(allShows)
      handleVisible(false);
    }else{
      fetchData(selectedValue);
    handleVisible(true);
    setShowId(selectedValue);
  }
    
  };

  allShows.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <select name="shows" id="shows" onChange={handleSelectShowChange}>
      <option value="allShows" defaultValue>
        --Select the show--
      </option>
      {allShows.map((show) => (
        <option key={show.id} value={show.id}>
          {show.name}
        </option>
      ))}
    </select>
  );
};

export default SelectShows;
