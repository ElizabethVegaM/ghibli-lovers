import React, { useEffect, useState } from "react";
import GhibliData from "./context/ghibliData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Locations from "./components/Locations";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  const [movies, getMovies] = useState(null);
  useEffect(() => {
    fetch("./ghibli.json")
      .then((res) => res.json())
      .then((data) => getMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {movies && (
        <GhibliData.Provider value={movies}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/films" children={<Films />} />
              <Route path="/characters" children={<Characters />} />
              <Route path="/locations">
                <Locations />
              </Route>
            </Switch>
          </Router>
        </GhibliData.Provider>
      )}
    </div>
  );
};

export default App;
