import { HStack, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {useState} from "react";
const Content = () => {
  const [items, setItems] = useState([]);
  const getItems = async() => {
    const items = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/items`)
    setItems(items.data.items)
  }
  React.useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <VStack marginTop={150}>
        <HStack>
          {items.length > 0 ? items.map((item, i) => {
            return (
              <div key={i} >
                <h3 >{item.name}</h3>
                <p>{item.description}</p>
                {item.uploadedImages ? <img src={item.uploadedImages[0]} alt={item.name}
                  style={{ width: 200, height: 200 }}
                /> : null}
                {item.sellingStatus && <p>Price: {item.sellingPrice}</p>}
              </div>
            );
          }) : <>no items</>}
        </HStack>
      </VStack>
    </>
  );
};

export default Content;
