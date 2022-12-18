/*eslint-disable*/
import { Button, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Swapy Trading Website</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
      <Link to="/additem">
        <Center>
          <Button
            top={10}
            leftIcon={<AddIcon />}
            colorScheme="teal" variant="outline">
            Add Item to Swap or Sell
          </Button>
        </Center>
      </Link>
    </>
  );
}

export default IndexHeader;
