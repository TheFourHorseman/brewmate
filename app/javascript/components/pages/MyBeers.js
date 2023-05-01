
import React from "react";
import IndexCard from "../components/IndexCard";

const MyBeers = ({ beers, current_user, deleteBeer }) => {
  let userBeers = beers?.filter((beer) => current_user.id === beer.user_id);

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import IconButton from '@mui/material/IconButton';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Stack from '@mui/material/Stack';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import Tooltip from '@mui/material/Tooltip';

const MyBeers = ({ beers, beer,
  current_user,
  logged_in,
  likes,
  deleteBeer,
  likeBeer,
  deleteLike, }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let selectedLike = likes?.find(
    (like) => beer?.id === like?.beer_id && current_user?.id === like?.user_id
  );
  const isLiked = () => {
    return (
      likes?.filter(
        (like) => like.user_id === current_user.id && like.beer_id === beer?.id
      ).length > 0
    );
  };
  let userBeers = beers?.filter((beer) => current_user.id === beer.user_id);
  let navigate = useNavigate()
  
  const onDeleteSubmit = () => {
    deleteBeer(beer.id);
    // TODO: Handle this behavior better
    navigate("/beerindex");
  };
  const onLikeSubmit = () => {
    let likedBeer = {
      beer_id: beer.id,
      user_id: current_user.id,
    };
    likeBeer(likedBeer);
    // navigate(0);
  };
  const onRemoveLikeSubmit = () => {
    deleteLike(selectedLike.id);
    // navigate(0);
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
