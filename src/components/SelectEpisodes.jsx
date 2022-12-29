import React,{useEffect, useState} from "react";

const SelectEpisodes= ({showId})=>{

  const[episodeData,setEpisodeData]=useState([]);

  useEffect(() => {

    fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
    .then(response=>response.json())
    .then(data=>setEpisodeData(data))
    .catch(err=>console.log(err));
  }, [showId])

   
 
  
    return (  
      <>
        (
          <select name="movies" id="movies">
            <option value="" defaultValue>
               --Select the episode-- 
            </option>
            {episodeData.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        )
      </>
     
    );
}

export default SelectEpisodes;