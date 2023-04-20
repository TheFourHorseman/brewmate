import React from "react";
import { ButtonGroup } from "reactstrap";

const MyBeers = ({beers, current_user }) => {
  const userBeers = beers?.filter( beer => current_user.id === beer.user_id)
  return (  
  <>
    <div className="index-content">
      <h2>View All Brews</h2>
      <div className="index-cards">
        {userBeers?.filter((beer, index) => {
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
                  <Button>Show More</Button>
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
