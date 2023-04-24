import React from "react";
import { useParams, useNavigate
 } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";

const BeerShow = ({ beers, props, deleteBeer, logged_in }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedBeer = beers?.find(beer => beer.id === +id)

  const onDeleteSubmit = () =>{
    deleteBeer(selectedBeer.id)
    navigate("/beerindex")
  }

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
                  <CardSubtitle className="mb-2 text-muted" tag="h6">Brewery:
                  <br/>
                    {selectedBeer.brewery_name}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">Style:
                  <br/>
                    {selectedBeer.style}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">ABV:
                  <br/>
                    {selectedBeer.abv}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">IBU:
                  <br/>
                    {selectedBeer.ibu}
                  </CardSubtitle>
                </CardBody>
                {props.logged_in && 
                  <Button>Like This Beer</Button>
                }
                
              {props.current_user?.id === selectedBeer.user_id &&(
              <>
                <Button>Edit</Button>
                <Button onClick={onDeleteSubmit}>Delete</Button>
                </>
              )}
              </Card>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="go-back">
        <Button href="/beerindex">All Beers</Button>
        </div>
      </div>
      }
    </>
  );
};

export default BeerShow;
