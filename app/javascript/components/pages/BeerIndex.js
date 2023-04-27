import React, {useState} from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";


const BeerIndex = ({ beers, props}) => {
  const [search, setSearch] = useState('');
  const [response, setResponse] =  useState()
  const navigate = useNavigate()

  function handleInputChange(event) {
    setSearch(event.target.value);
    searchResponse()
  }


  const filteredBeers = beers?.filter((beer) =>
    beer?.beer_name.toLowerCase().includes(search.toLowerCase())
  );
  
  const searchResponse = () => {
      if(props.logged_in === true && filteredBeers.length === 0){
        setResponse(1)
      }else if (filteredBeers.length === 0){
        setResponse(2)
      }else {setResponse(3)}
  }

  return (
    <>
    <div>
      <input type="text" placeholder="Search by beer name..." value={search} onChange={handleInputChange} />
      {response === 1 && (
          <h2>{`The beer: "${search}" was not found. You can add it `}<NavLink to="/beernew">here</NavLink></h2>
      )}
      {response === 2 && (
          <h2>{`The beer: "${search}" was not found.`}</h2>
      )}
      

      
      <div className="index-cards">
        {filteredBeers?.map((beer, index) => {
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
                 <Button href={`/beershow/${beer.id}`}>Show More</Button>
               </Card>
             );
        })}
        </div>
    </div>
    </>
  );
}


export default BeerIndex;
