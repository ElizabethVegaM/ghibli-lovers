import React from "react";
import { useHistory } from "react-router-dom";

const FilmExtendedCard = ({ info }) => {
  let history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <section className="extended-film-container">
      <div className="extended-poster-container">
        <img src={info.poster} alt="foto" />
      </div>
      <div className="extended-card-info">
        <h2>{info.title}<span>({info.release_date})</span></h2>
        <p>{info.description}</p>
        <p>Director: {info.director}</p>
        <p>Producer: {info.producer}</p>
      </div>
      <div className="extended-btn-container">
        <button onClick={handleClick}>Go Back</button>
      </div>
    </section>
  );
};

export default FilmExtendedCard;
