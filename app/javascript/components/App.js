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
import Header from "./components/Header"

const App = (props) => {
  const [beers, setBeers] = useState([]);

  const readBeer = () => {
    fetch("/beers")
      .then((response) => response.json())
      .then((payload) => setBeers(payload))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    readBeer();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Header {...props}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beerindex" element={<BeerIndex beers={beers} />} />
          <Route path="/beershow" element={<BeerShow />} />
          <Route path="/beeredit" element={<BeerEdit />} />
          <Route path="/beernew" element={<BeerNew />} />
          <Route path="/beersuggestions" element={<BeerSuggestions />} />
          <Route path="/beerprofile" element={<BeerProfile />} />
          <Route path="/mybeers" element={<MyBeers {...props}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
