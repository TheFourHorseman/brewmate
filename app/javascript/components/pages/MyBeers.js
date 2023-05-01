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
import IndexCard from "../components/IndexCard";

const MyBeers = ({
  beers,
  current_user,
  deleteBeer,
  likes,
  deleteLike,
  likeBeer,
  logged_in,
}) => {
  const navigate = useNavigate();
  let userBeers = beers?.filter((beer) => current_user.id === beer.user_id);

  const onDeleteSubmit = () => {
    deleteBeer(userBeers.id);
    navigate("/mybeers");
  };

  return (
    <>
      <div className="index-content">
        <h2>Your Uploaded Brews</h2>
        <div className="index-cards">
          {userBeers?.map((beer, index) => {
            return (
              <IndexCard
                beer={beer}
                key={index}
                navigate={navigate}
                current_user={current_user}
                logged_in={logged_in}
                deleteBeer={deleteBeer}
                likeBeer={likeBeer}
                deleteLike={deleteLike}
                likes={likes}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyBeers;
