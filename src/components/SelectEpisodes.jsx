import React,{useState} from "react";

const SelectEpisodes= ({isVisible,showId})=>{

  const[episodeData,setEpisodeData]=useState([]);

   fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
   .then(response=>response.json())
   .then(data=>setEpisodeData(data))
   .catch(err=>console.log(err));
 
  
    return (  
      
      <>
        {isVisible ? (
          <select name="movies" id="movies">
            <option value="" defaultValue>
               --Select the episode-- 
            </option>
            {episodeData.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        ) : null}
      </>
     
    );
}

export default SelectEpisodes;