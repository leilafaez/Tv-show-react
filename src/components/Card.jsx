import React from "react";

const Card=({show})=>{
      const newSummary = show.summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="root">
      <section>
        <h3>{show.name}</h3>
        <img src={show.image?.medium} alt="" />
         <p>{newSummary}</p>
        <CardDetails show={show} />
      </section>
    </div>
  );
}
const CardDetails = ({ show }) => {
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
};

export default Card;