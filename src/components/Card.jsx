import React from "react";

const Card = ({ item, setContent, handleVisible }) => {
  const newSummary = item.summary.replace(/(<([^>]+)>)/gi, "");

  const handleEpisodeFromCard = () => {
    const value = item.id;
    const fetchDataEpisodeFromCard = fetch(
      `https://api.tvmaze.com/shows/${value}/episodes`
    )
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((err) => console.log(err));
    fetchDataEpisodeFromCard(value);
    handleVisible(true);
  };
  return (
    <div className="root">
      <section onClick={handleEpisodeFromCard}>
        <h3>{item.name}</h3>
        <img src={item.image?.medium} alt="" />
        <p>{newSummary}</p>
        <CardDetails item={item} />
      </section>
    </div>
  );
};
const CardDetails = ({ item }) => {
  return (
    <>
      {item.genres && (
        <div>
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