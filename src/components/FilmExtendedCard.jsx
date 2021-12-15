import React, { useState, useEffect } from "react";
import {
  useLocation,
  useRouteMatch,
  Link,
  Route,
} from "react-router-dom";
import CharacterExtendedCard from "./CharacterExtendedCard";

const FilmExtendedCard = ({ info, history }) => {
  const [charInfo, updateInfo] = useState({
    movie: null,
    character: null,
    isOpen: false,
  });
  const [movieSelected, checkMovie] = useState(false);
  let location = useLocation();

  useEffect(() => {
    checkMovie(location.pathname !== "/films" ? true : false);
  }, [location]);

  let { path } = useRouteMatch();
  const handleClick = () => {
    history.goBack();
  };
  console.log(movieSelected);

  return (
    <main className="extended-film-container">
      {!charInfo.isOpen ? (
        <>
          <div className="extended-poster-container">
            <img src={info.poster} alt="foto" />
          </div>
          <div className="extended-card-info">
            <h2>
              {info.title}
              <span>({info.release_date})</span>
            </h2>
            <p>{info.description}</p>
            <p>Director: {info.director}</p>
            <p>Producer: {info.producer}</p>
            <div className="character-container">
              {info.people &&
                info.people.map((people) => (
                  <Link to={`characters/${people.id}`} key={people.id}>
                    <figure
                      key={people.id}
                      className="card small-card"
                      onClick={() =>
                        updateInfo({
                          movie: info.title,
                          character: people,
                          isOpen: true,
                        })
                      }
                    >
                      <img src={people.img} alt={people.name} />
                      <figcaption>
                        <h3>{people.name}</h3>
                      </figcaption>
                    </figure>
                  </Link>
                ))}
            </div>
          </div>
          <div className="extended-btn-container">
        <button onClick={handleClick}>Go Back</button>
      </div>
        </>
      ) : (
        <Route path={`${path}/:id`}>
        <CharacterExtendedCard
          movie={charInfo.movie}
          info={charInfo.character}
        />
      </Route>
      )}
    </main>
  );
};

export default FilmExtendedCard;
