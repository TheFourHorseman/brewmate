
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


import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IndexCard from "../components/IndexCard";

const MyLikedBeers = ({
  current_user,
  deleteBeer,
  likes,
  deleteLike,
  likeBeer,
  logged_in,
}) => {
  const navigate = useNavigate();

  let myLikedBeers = likes?.filter((like) => current_user.id === like.user_id);
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
        {myLikedBeers.length > 0 && <h2>Your Liked Brews</h2>}
        {myLikedBeers.length === 0 && (
          <h2>
            You're glass is looking a bit empty, why don't you go check out some beers
          </h2>
        )}

        <div className="index-cards">
          {myLikedBeers?.map((like, index) => {
            return (
              <IndexCard
                beer={like.beer}
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

export default MyLikedBeers;
