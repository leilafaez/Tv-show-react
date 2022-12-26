import React,{useState,useEffect} from "react";
import getAllShows from "../data/shows";
import Card from "./Card";


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
    //    console.log(showNames);
         
    return !isLoading ? (
      <div className="root">
        {showNames.map((show) => {
          return (
            <Card key={show.id} show={show}/>
          );
        })}
      </div>
    ) : (
     {isLoading } && <div className="loading" /> 
    );

}


export default Cards;