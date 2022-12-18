import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
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
        <section className="container" key={i}>
        <div className="card" key={i}>
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <img className="card-img" src={item.uploadedImages[0] } alt={item.id} />
              <h2 className="java">Owner name :</h2>
              <p className="java"> {item.name}</p>
              <h2 className="java"> Price :</h2>
              <p className="java">${item.sellingPrice}</p>
              <h2 className="java">Description :</h2>
              <p className="java">{item.description}</p>
              <Link to={`/swap/${item.id}`}><button className="card-btn">More details</button></Link>
            </div>
          </div>
          <div className="face face2">
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

