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
      <div className="index-content">
        <h2>View All Brews</h2>
        <div className="index-cards">
          {beers.map((beer, index) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
                key={index}
                className="index-card"
              >
                <CardBody>
                  <img alt="Sample" src={beer.image} className="index-image" />
                  <CardTitle tag="h5">{beer.beer_name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {beer.brewery_name}
                  </CardSubtitle>
                  <CardText>{beer.beer_style}</CardText>
                </CardBody>
                <Button>Show More</Button>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BeerIndex;
