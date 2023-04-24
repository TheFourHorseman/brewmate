import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const MyLikedBeers = ({ likedBeers, current_user }) => {
  const navigate = useNavigate();
  let myLikedBeers = likedBeers?.filter(
    (like) => current_user.id === like.user_id
  );

  //   const onDeleteSubmit = () => {
  //     deleteBeer(likedBeers.id);
  //     navigate("/MyLikedBeers");
  //   };

  return (
    <>
      {console.log("liked beers:", myLikedBeers)}
      {console.log("liked beers:", myLikedBeers)}
      <div className="index-content">
        <h2>Your Liked Brews</h2>
        <div className="index-cards">
          {myLikedBeers?.map((like, index) => {
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
                    alt={`A picture of ${like.beer.beer_name}`}
                    src={like.beer.image}
                    className="index-image"
                  />
                  <CardTitle tag="h5">{like.beer.beer_name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {like.beer.brewery_name}
                  </CardSubtitle>
                  <CardText>{like.beer.beer_style}</CardText>
                </CardBody>
                <ButtonGroup>
                  <Button href={`/beershow/${like.beer.beer_id}`}>
                    Show More
                  </Button>
                </ButtonGroup>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyLikedBeers;
