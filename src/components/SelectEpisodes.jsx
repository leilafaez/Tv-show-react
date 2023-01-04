import React from "react";

const SelectEpisodes= ({content,setContent,showId})=>{

   const fetchDataEpisodeFromCard = async () => {
     const result = await fetch(
       `https://api.tvmaze.com/shows/${showId}/episodes`
     );
     const data = await result.json();
     setContent(data);
   };
    let handleSelectEpisodeChange=event=>{

      let selectValue=event.target.value;
      if (selectValue === "Allepisode"){
        fetchDataEpisodeFromCard();
      
        
      }else{
        setContent(
          content.filter((element) => {
            if(element.name===selectValue){
            
              return true;
            }
            return false;
          })
        );
      };
    }
    return (  
        
          <select name="movies" id="movies" onChange={handleSelectEpisodeChange}>
            <option value="Allepisode" defaultValue>
               --Select the episode-- 
            </option >
            {content.map((item)=><option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
        ) 
     
    
}

export default SelectEpisodes;