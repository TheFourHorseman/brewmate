import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <>
      <div className="index-content">
        <h2>View All Brews</h2>
        <div className="index-cards">
          {beers?.map((beer, index) => {
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
      </div>
    </>
  );
};

export default BeerIndex;
