import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import "./sectionNuc.css";
import './sectionNuc.scss';
// core components
function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <div >
            <Col  md="12">
              <h2 className="title">Letting you know</h2>
              <br />
              <p className="description">Swapy comes with the productively high quality 
              products and services.
              This is the best way to make your mark in the world of trading.
              And we are here to help you to make your mark in the world of trading.
              </p>
              <br />
            </Col>
            <div className="icons-container">
              <div className="row123">
            <Col  md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
            </div>
            </div>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
