import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IndexCard from "../components/IndexCard";

const BeerIndex = ({
  beers,
  current_user,
  likeBeer,
  deleteLike,
  deleteBeer,
  likes,
  logged_in,
}) => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    searchResponse();
  };

  const filteredBeers = beers?.filter((beer) =>
    beer?.beer_name.toLowerCase().includes(search.toLowerCase())
  );

  const searchResponse = () => {
    if (logged_in && filteredBeers.length === 0) {
      setResponse(1);
    } else if (filteredBeers.length === 0) {
      setResponse(2);
    } else {
      setResponse(3);
    }
  };

  return (
    <>
      <div className="index-content">
        <h2>View All Brews</h2>
        <div className="index-cards">
          {filteredBeers?.map((beer, index) => {
            return (
              <IndexCard
                beer={beer}
                key={index}
                navigate={navigate}
                current_user={current_user}
                logged_in={logged_in}
                deleteBeer={deleteBeer}
                likeBeer={likeBeer}
                deleteLike={deleteLike}
                likes={likes}
              />
            );
          })}
        </div>
      
    </>
  );
};

export default BeerIndex;
