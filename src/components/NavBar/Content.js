import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "./card.scss"
import "./card.css"
const Content = () => {
  const [ items, setItems ] = useState( [] );
  const getItems = async () => {
    const items = await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/items` );
    setItems( items.data.items );
  };
  React.useEffect( () => {
    getItems();
  }, [] );

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
    
    items.length > 0 ? items.map ((item, i) => {
      return (
        <section class="container">
 
        <div class="card" key={i}>
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <img class="card-img" src={item.uploadedImages } alt="image" />
              <h2 class="java">Owner name :</h2>
              <p class="java"> {item.name}</p>
              <h2 class="java"> Price :</h2>
              <p class="java">${item.sellingPrice}</p>
              <h2 class="java">Description :</h2>
              <p class="java">{item.description}</p>
              <Link to={`/swap/${item.id}`}><button class="card-btn">More details</button></Link>
            </div>
          </div>
          <div class="face face2">
            <h2>Items</h2>
          </div>
        </div>
      </section>

);
        } ) : <>no items</>
      }
    </Grid>
  );
};
export default Content;

