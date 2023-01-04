import React from "react";

const Card = ({ item, setContent, handleVisible,setShowId }) => {

  
  const fetchDataEpisodeFromCard = async () => {
    const result = await fetch(
      `https://api.tvmaze.com/shows/${item.id}/episodes`
    );
    const data = await result.json();
    setContent(data);
  };

  const handleEpisodeFromCard = () => {
    fetchDataEpisodeFromCard(item.id);
     handleVisible(true);
    setShowId(item.id)

  };
  return (
    <div >
      <section onClick={handleEpisodeFromCard}>
        <h3>{item.name}</h3>
        <img src={item.image?.medium} alt="" />
        <p>{item.summary && item.summary.replace(/(<([^>]+)>)/gi, "") }</p>
        <CardDetails item={item} />
      </section>
    </div>
  );
};
const CardDetails = ({ item }) => {
  return (
    <>
      {item.genres && (
        <div className="card-detail">
          <ul>
            <li>Rating : {item.rating.average}</li>
            <li>Genres : {item.genres[0]}</li>
            <li>Status : {item.status}</li>
            <li>Runtime : {item.runtime}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Card;