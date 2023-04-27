import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Collapse,
  Badge,
} from "reactstrap";

const IndexCard = ({
  beer,
  current_user,
  logged_in,
  likes,
  navigate,
  deleteBeer,
  likeBeer,
  deleteLike,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // find the like (if any) assosciated with this beer and user
  let selectedLike = likes?.find(
    (like) => beer?.id === like?.beer_id && current_user?.id === like?.user_id
  );

  // we need to check if the array of likes contains an object that matches the signed in user and selected beer
  const isLiked = () => {
    return (
      likes?.filter(
        (like) => like.user_id === current_user.id && like.beer_id === beer?.id
      ).length > 0
    );
  };

  // passes the beer id up to the deleteBeer function when delete button is pressed
  const onDeleteSubmit = () => {
    deleteBeer(beer.id);
    // TODO: Handle this behavior better
    navigate("/beerindex");
  };

  // passes beer id to the likeBeer function on button press
  const onLikeSubmit = () => {
    let likedBeer = {
      beer_id: beer.id,
      user_id: current_user.id,
    };
    likeBeer(likedBeer);
    // navigate(0);
  };

  // removes the like from the database
  const onRemoveLikeSubmit = () => {
    deleteLike(selectedLike.id);
    // navigate(0);
  };

  return (
    <>
      {beer && (
        <Card
          style={{
            width: "20vw",
          }}
          className="index-card"
        >
          <CardBody>
            <img
              alt={`A picture of ${beer?.beer_name}`}
              src={beer?.image}
              className="index-image"
            />
            <CardTitle tag="h5">{beer?.beer_name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {beer?.brewery_name}
            </CardSubtitle>
            <CardText>{beer?.beer_style}</CardText>
            <Collapse isOpen={isOpen}>
              <CardText>
                <Badge>ABV: {beer.abv}</Badge>
                <Badge>IBU: {beer.ibu}</Badge>
                <Badge>Style: {beer.style}</Badge>
              </CardText>
            </Collapse>
          </CardBody>
          <Button onClick={toggle}>Show More Info</Button>
          {logged_in && (
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
          {current_user?.id === beer.user_id && (
            <>
              <Button onClick={() => navigate(`/beeredit/${beer.id}`)}>
                Edit
              </Button>
              <Button onClick={onDeleteSubmit}>Delete</Button>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default IndexCard;
