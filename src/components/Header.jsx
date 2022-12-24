import React from "react";
import SelectEpisodes from "./SelectEpisodes";
import SelectShows from "./SelectShows";
import Search from "./Search";

const Header=()=>{
    return(
        <header>
            <h1>Tv-Shows</h1>
            <Search />
            <SelectShows />
            <SelectEpisodes/>
        </header>
    );
}

export default Header;