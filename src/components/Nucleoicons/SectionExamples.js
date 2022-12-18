import React from "react";

// reactstrap components
import { Button, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <div className="text-center" md="5">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/landing-page.png")}
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    objectPosition: "center",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    margin: "auto",
                  }}
                />
              </a>
              <Link to="/about-us">
                <Button
                  className="btn-outline-neutral btn-round"
                  color="default"
                >
                  Landing Page
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
