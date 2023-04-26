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

const IndexCard = ({ beer, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
          <Button onClick={() => navigate(`/beershow/${beer?.id}`)}>
            Show More
          </Button>
          <Button onClick={toggle}>Dropdown</Button>
        </Card>
      )}
    </>
  );
};

export default IndexCard;
