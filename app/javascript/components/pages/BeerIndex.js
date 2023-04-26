import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Collapse,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import IndexCard from "../components/IndexCard";

const BeerIndex = ({ beers }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="index-content">
        <h2>View All Brews</h2>
        <div className="index-cards">
          {beers?.map((beer, index) => {
            return <IndexCard beer={beer} key={index} navigate={navigate} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BeerIndex;
