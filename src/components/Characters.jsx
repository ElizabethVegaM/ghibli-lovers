import React, { useContext, useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";
import CharacterExtendedCard from "./CharacterExtendedCard";
import ghibliData from "../context/ghibliData";
import Header from "./Header";

const Characters = () => {
  const data = useContext(ghibliData);
  const [movieSelected, checkMovie] = useState(false);
  const [charInfo, updateInfo] = useState({
    movie: null,
    character: null,
  });
  let { path, url } = useRouteMatch();
  let location = useLocation();

  useEffect(() => {
    checkMovie(location.pathname !== "/characters" ? true : false);
  }, [location]);

  return (
    <>
      <Header />
      <main className="main-container">
        {!movieSelected && (
          <section className="films-container">
            {data &&
              data.films.map((film) => {
                return film.people.map((people) => {
                  return (
                    <article>
                      <Link to={`${url}/${people.id}`} key={people.id}>
                        <figure
                          key={people.id}
                          className="card"
                          onClick={() =>
                            updateInfo({
                              movie: film.title,
                              character: people,
                            })
                          }
                        >
                          <img src={people.img} alt={people.name} />
                          <figcaption>
                            <h3>{people.name}</h3>
                          </figcaption>
                        </figure>
                      </Link>
                    </article>
                  );
                });
              })}
          </section>
        )}

        <Route path={`${path}/:id`}>
          <CharacterExtendedCard
            movie={charInfo.movie}
            info={charInfo.character}
          />
        </Route>
      </main>
    </>
  );
};

export default Characters;
