import React from "react";
import SelectEpisodes from "./SelectEpisodes";
import SelectShows from "./SelectShows";
import Search from "./Search";

const Header = ({ content,setContent ,isVisible,handleVisible,showId,setShowId}) => {
  
  return (
    <header>
      <h1>Tv-Shows</h1>
      <Search content={content} setContent={setContent} />
      <SelectShows
        setContent={setContent}
        handleVisible={handleVisible}
        setShowId={setShowId}
      />
{     isVisible && <SelectEpisodes  content={content} setContent={setContent} showId={showId} />}  
  </header>
  );
};

export default Header;