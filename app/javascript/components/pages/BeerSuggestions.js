import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const BeerSuggestions = ({ current_user, suggested, likes, suggestedBeer }) => {
  let myIBUSuggestions = suggested?.ibu_suggested;
  let myABVSuggestions = suggested?.abv_suggested;
  let styleSuggestions = suggested?.style_suggested;
  useEffect(() => {
    suggestedBeer(current_user.id);
  }, []);
  return (
    <>
      {likes.length === 0 && (
        <h2>
          Once you have liked a few beers, we can start to give you some
          suggestions!
          <NavLink to="/beerindex">Check out some beers</NavLink>
        </h2>
      )}
      {myIBUSuggestions && (
        <div className="index-content">
          {myIBUSuggestions?.length > 0 && (
            <>
              <h2>Your Beer Suggestions By IBU</h2>
              <h4>--Closest to your liked beers IBU from left to right--</h4>
            </>
          )}
          {myIBUSuggestions?.length === 0 && (
            <h2>
              You need to like a beer before we are able to give suggestions{" "}
              <NavLink to="/beerindex">Check out some beers</NavLink>
            </h2>
          )}

          <div className="index-cards">
            {myIBUSuggestions?.map((beer, index) => {
              return (
                <Card
                  style={{
                    width: "18rem",
                  }}
                  key={index}
                  className="index-card"
                >
                  <CardBody>
                    <img
                      alt={`A picture of ${beer.beer_name}`}
                      src={beer.image}
                      className="index-image"
                    />
                    <CardTitle tag="h5">{beer.beer_name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {beer.brewery_name}
                    </CardSubtitle>
                    <CardText>{beer.beer_style}</CardText>
                  </CardBody>
                  <ButtonGroup>
                    <Button href={`/beershow/${beer.id}`}>Show More</Button>
                  </ButtonGroup>
                </Card>
              );
            })}
          </div>
        </div>
      )}
      {/*++++++++ ABV SUGGESTION SECTION*/}
      {myABVSuggestions && (
        <div className="index-content">
          {myABVSuggestions?.length > 0 && (
            <>
              <h2>Your Beer Suggestions By ABV</h2>
              <h4>--Closest to your liked beers ABV from left to right--</h4>
            </>
          )}
          {myABVSuggestions?.length === 0 && (
            <h2>
              You need to like a beer before we are able to give suggestions{" "}
              <NavLink to="/beerindex">Check out some beers</NavLink>
            </h2>
          )}

          <div className="index-cards">
            {myABVSuggestions?.map((beer, index) => {
              return (
                <Card
                  style={{
                    width: "18rem",
                  }}
                  key={index}
                  className="index-card"
                >
                  <CardBody>
                    <img
                      alt={`A picture of ${beer.beer_name}`}
                      src={beer.image}
                      className="index-image"
                    />
                    <CardTitle tag="h5">{beer.beer_name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {beer.brewery_name}
                    </CardSubtitle>
                    <CardText>{beer.beer_style}</CardText>
                  </CardBody>
                  <ButtonGroup>
                    <Button href={`/beershow/${beer.id}`}>Show More</Button>
                  </ButtonGroup>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/*++++++++ STYLE SUGGESTION SECTION*/}
      {styleSuggestions && (
        <div className="index-content">
          {styleSuggestions?.length > 0 && (
            <>
              <h2>Your Beer Suggestions By styles</h2>
              <h4>--Beers of the same styles you already like--</h4>
            </>
          )}
          {styleSuggestions?.length === 0 && (
            <h2>
              You need to like a beer before we are able to give suggestions{" "}
              <NavLink to="/beerindex">Check out some beers</NavLink>
            </h2>
          )}

          <div className="index-cards">
            {styleSuggestions?.map((beer, index) => {
              return (
                <Card
                  style={{
                    width: "18rem",
                  }}
                  key={index}
                  className="index-card"
                >
                  <CardBody>
                    <img
                      alt={`A picture of ${beer.beer_name}`}
                      src={beer.image}
                      className="index-image"
                    />
                    <CardTitle tag="h5">{beer.beer_name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {beer.brewery_name}
                    </CardSubtitle>
                    <CardText>{beer.beer_style}</CardText>
                  </CardBody>
                  <ButtonGroup>
                    <Button href={`/beershow/${beer.id}`}>Show More</Button>
                  </ButtonGroup>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BeerSuggestions;
