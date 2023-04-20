import React from "react";
import { useParams } from "react-router";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const BeerShow = ({ beers, props }) => {
  const { id } = useParams()
  let selectedBeer = beers?.find(beer => beer.id === +id)

  return (
    <>
    {selectedBeer && 
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
                    {selectedBeer.brewery_name}
                  </CardSubtitle>
                  <CardText>{selectedBeer.beer_style}</CardText>
                </CardBody>
                {props.logged_in && 
                  <Button>Like This Beer</Button>
                }
                
              {props.current_user?.id === selectedBeer.user_id &&(
              <>
                <Button>Edit</Button>
                <Button>Delete</Button>
                </>
              )}
              </Card>
        </div>
        <div className="go-back">
        <Button href="/beerindex">All Beers</Button>
        </div>
      </div>
      }
    </>
  );
};

export default BeerShow;
