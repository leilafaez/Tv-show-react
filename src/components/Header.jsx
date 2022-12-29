import React,{useState} from "react";
import SelectEpisodes from "./SelectEpisodes";
import SelectShows from "./SelectShows";
import Search from "./Search";

const Header = ({ setContent ,isVisible,handleVisible}) => {
  
  const [showId, setShowId] = useState();

  return (
    <header>
      <h1>Tv-Shows</h1>
      <Search />
      <SelectShows
        setContent={setContent}
        handleVisible={handleVisible}
        setShowId={setShowId}
      />
      {isVisible && <SelectEpisodes showId={showId} />}
    </header>
  );
};

export default Header;