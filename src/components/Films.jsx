import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";
import ghibliData from "../context/ghibliData";
import FilmExtendedCard from "./FilmExtendedCard";
import Header from "./Header";

const Films = () => {
  const movies = useContext(ghibliData);
  const [movieSelected, checkMovie] = useState(false);
  const [movieInfo, updateInfo] = useState(null);
  let { path, url } = useRouteMatch();
  let location = useLocation();

  useEffect(() => {
    checkMovie(location.pathname !== "/films" ? true : false);
  }, [location]);

  return (
    <>
      <Header />
      <main className="main-container">
        {!movieSelected && (
          <section className="films-container">
            {movies &&
              movies.films.map((el) => {
                return (
                  <Link to={`${url}/${el.id}`} key={el.id}>
                    <figure
                      key={el.id}
                      className="card"
                      onClick={() => updateInfo(el)}
                    >
                      <img src={el.poster} alt={el.title} />
                      <figcaption>
                        <h3>{el.title}</h3>
                      </figcaption>
                    </figure>
                  </Link>
                );
              })}
          </section>
        )}
        <Route path={`${path}/:id`}>
          <FilmExtendedCard info={movieInfo} />
        </Route>
      </main>
    </>
  );
};

export default Films;
