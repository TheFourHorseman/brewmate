import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";

const BeerShow = ({
  beers,
  props,
  likes,
  deleteBeer,
  likeBeer,
  deleteLike,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let selectedBeer = beers?.find((beer) => beer.id === +id);
  let selectedLike = likes?.find(
    (like) =>
      selectedBeer?.id === like?.beer_id &&
      props.current_user?.id === like?.user_id
  );

  // we need to check if the array of likes contains an object that matches the signed in user and selected beer
  const isLiked = () => {
    return (
      likes?.filter(
        (like) =>
          like.user_id === props.current_user.id &&
          like.beer_id === selectedBeer?.id
      ).length > 0
    );
  };

  const onDeleteSubmit = () => {
    deleteBeer(selectedBeer.id);
    navigate("/beerindex");
  };

  const onLikeSubmit = () => {
    let likedBeer = {
      beer_id: selectedBeer.id,
      user_id: props.current_user.id,
    };
    likeBeer(likedBeer);
    navigate(0);
  };

  const onRemoveLikeSubmit = () => {
    deleteLike(selectedLike.id);
    navigate(0);
  };

  return (
    <>
      {selectedBeer && (
        <div className="index-content">
          <h2>{selectedBeer.beer_name}</h2>
          <div className="show-cards">
            <Card
              style={{
                width: "18rem",
              }}
              className="show-card"
            >
              <CardBody>
                <img
                  alt={`A picture of ${selectedBeer.beer_name}`}
                  src={selectedBeer.image}
                  className="index-image"
                />
                <CardTitle tag="h5">{selectedBeer.beer_name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Brewery:
                  <br />
                  {selectedBeer.brewery_name}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Style:
                  <br />
                  {selectedBeer.style}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  ABV:
                  <br />
                  {selectedBeer.abv}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  IBU:
                  <br />
                  {selectedBeer.ibu}
                </CardSubtitle>
              </CardBody>
              {props.logged_in && (
                <>
                  {isLiked() && (
                    <Button color="danger" onClick={onRemoveLikeSubmit}>
                      Remove Like
                    </Button>
                  )}
                  {!isLiked() && (
                    <Button onClick={onLikeSubmit}>Like This Beer</Button>
                  )}
                </>
              )}

              {props.current_user?.id === selectedBeer.user_id && (
                <>
                  <Button href={`/beeredit/${selectedBeer.id}`}>Edit</Button>
                  <Button onClick={onDeleteSubmit}>Delete</Button>
                </>
              )}
            </Card>
          </div>
          <br />
          <br />
          <br />
          <div className="go-back">
            <Button href="/beerindex">All Beers</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerShow;
