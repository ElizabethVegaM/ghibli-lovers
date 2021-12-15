import React, { useEffect } from "react";
import { useHistory, Link  } from "react-router-dom";

const CharacterExtendedCard = ({ movie, info }) => {
  let history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <section className="extended-film-container">
      <div className="extended-poster-container">
        <img src={info.img} alt="foto" />
      </div>
      <div className="extended-card-info">
        <h2>
          {info.name}
          <span>({movie})</span>
        </h2>
        <p>Gender: {info.gender}</p>
        <p>Age: {info.age}</p>
        <p>Eye Color: {info.eye_color}</p>
        <p>Hair Color: {info.hair_color}</p>
        <p>Species: {info.specie}</p>
      </div>
      <div className="extended-btn-container">
        <button onClick={handleClick}>Go Back</button>
      </div>
    </section>
  );
};

export default CharacterExtendedCard;
