import React from "react";
import Navbar from "./NavBar/NavBar";
import Services from "./NavBar/Services";
import '../scss/App.scss';
import '../scss/content.scss';
import '../scss/navBar.scss';
import Content from "./NavBar/Content";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Content />
        {/* <Services /> */}
    </div>
  );
};

export default HomePage;
