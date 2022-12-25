import React,{useState,useEffect} from "react";
import getAllShows from "../data/shows";

const Cards = ()=>{
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
      setIsLoading(false);
    };

    useEffect(() => {
        window.addEventListener("load", handleLoading);
      return () => window.removeEventListener("load", handleLoading);
    }, [])

    const showNames = getAllShows();
       console.log(showNames);
  
    return !isLoading ? (
      <div className="root">
        {showNames.map((show) => {
          const newSummary = show.summary.replace(/(<([^>]+)>)/gi, "");
          // console.log(show.image.medium);
          return (
            <section key={show.id}>
              <h3>{show.name}</h3>
              <img src="" alt="" />
              <p>{newSummary}</p>
              <CardDetails show={show} />
            </section>
          );
        })}
      </div>
    ) : (
     {isLoading } && <div className="loading" /> 
    );

}
const CardDetails = ({show})=>{
    return (
      <div>
        <ul>
          <li>Rating : {show.rating.average}</li>
          <li>Genres : {show.genres[0]}</li>
          <li>Status : {show.status}</li>
          <li>Runtime : {show.runtime}</li>
        </ul>
      </div>
    );
}

export default Cards;