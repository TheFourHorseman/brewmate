import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const BeerIndex = ({ beers }) => {
  return (
    <>
      <h2>View All Brews</h2>
      <div className="index-content">
        {beers.map((beer, index) => {
          return (
            <Card
              style={{
                width: "18rem",
              }}
              key={index}
              className="index-card"
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">{beer.beer_name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {beer.brewery_name}
                </CardSubtitle>
                <CardText>{beer.beer_style}</CardText>
                <Button>Show More</Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default BeerIndex;
