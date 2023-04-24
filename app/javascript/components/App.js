import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeerIndex from "./pages/BeerIndex";
import BeerShow from "./pages/BeerShow";
import BeerEdit from "./pages/BeerEdit";
import BeerNew from "./pages/BeerNew";
import BeerSuggestions from "./pages/BeerSuggestions";
import BeerProfile from "./pages/BeerProfile";
import MyBeers from "./pages/MyBeers";
import Header from "./components/Header";

const App = (props) => {
  const [beers, setBeers] = useState([]);

  const readBeer = () => {
    fetch("/beers")
      .then((response) => response.json())
      .then((payload) => setBeers(payload))
      .catch((error) => console.log(error));
  };

  const createBeer = (beer) => {
    fetch("/beers", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readBeer())
      .catch((error) => console.log(beer.errors, error));
  };

  const editBeer = (beer, id) => {
    fetch(`/beers/${id}`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((error) => console.log(beer.errors, error));
  };

  const deleteBeer = (id) => {
    fetch (`/beers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      })
      .then((response) => response.json())
      .then(()=> readBeer())
      .catch((error)=>console.log(error))
    }

  useEffect(() => {
    readBeer();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beerindex" element={<BeerIndex beers={beers} />} />
          <Route
            path="/beeredit/:id"
            element={<BeerEdit beers={beers} editBeer={editBeer} />}
          />
          <Route path="/beershow/:id" element={<BeerShow  props = {props} beers={beers} deleteBeer={deleteBeer}/>} />
          <Route path="/beernew" element={<BeerNew current_user={props.current_user} createBeer={createBeer} /> } />

          <Route path="/beersuggestions" element={<BeerSuggestions />} />
          <Route path="/beerprofile" element={<BeerProfile />} />
          <Route
            path="/mybeers" element={ <MyBeers current_user={props.current_user} beers={beers} />}

            element={<MyBeers current_user={props.current_user} beers={beers} deleteBeer={deleteBeer}/>}

          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
