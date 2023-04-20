import React from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const MyBeers = ({ beers, current_user }) => {
  const userBeers = beers?.filter((beer) => current_user.id === beer.user_id);
  console.log(userBeers)
  return (
    <>
      <div className="index-content">
        <h2>Your Uploaded Brews</h2>
        <div className="index-cards">
          {userBeers?.map((beer, index) => {
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
                  <Button className="">Show More</Button>
                  <Button>Edit</Button>
                  <Button color="danger">Delete</Button>
                </ButtonGroup>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyBeers;
