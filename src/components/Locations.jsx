import React, { useContext } from "react";
import ghibliData from "../context/ghibliData";
import Header from "./Header";

const Locations = () => {
  const data = useContext(ghibliData);

  return (
    <>
    <Header />
    <main className="main-container">
      {data &&
        data.films.map((film) => {
          return film.locations.map((location) => {
              return (
                <figure
                  key={location.id}
                  className="card"
                >
                  <img src={location.img} alt={location.name} />
                  <figcaption>
                    <h3>{location.name}</h3>
                  </figcaption>
                </figure>
              );
            });
        })}
    </main>
    </>
  );
};

export default Locations;
