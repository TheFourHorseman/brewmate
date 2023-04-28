import React from "react";
import IndexCard from "../components/IndexCard";

const MyBeers = ({ beers, current_user, deleteBeer }) => {
  let userBeers = beers?.filter((beer) => current_user.id === beer.user_id);

  
  return (
    <>
      <div className="index-content">
        <h2>Your Uploaded Brews</h2>
        <div className="index-cards">
          {userBeers?.map((beer, index) => {
            return (
              <IndexCard
                beers={beers}
                beer={beer}
                current_user={current_user}
                deleteBeer={deleteBeer}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyBeers;
