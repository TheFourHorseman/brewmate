import React from "react";
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
  return (
    <>
      <BrowserRouter>
      <Header {...props}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beerindex" element={<BeerIndex />} />
          <Route path="/beershow" element={<BeerShow />} />
          <Route path="/beeredit" element={<BeerEdit />} />
          <Route path="/beernew" element={<BeerNew />} />
          <Route path="/beersuggestions" element={<BeerSuggestions />} />
          <Route path="/beerprofile" element={<BeerProfile />} />
          <Route path="/mybeers" element={<MyBeers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
