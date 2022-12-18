import React from "react";
import Navbar from "./NavBar/NavBar";
// import Services from "./NavBar/Services";
import '../scss/App.scss';
import '../scss/content.scss';
import '../scss/navBar.scss';
import Content from "./NavBar/Content";
import IndexHeader from "components/Header/IndexHeader";

// styles
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import SectionNucleoIcons from "./Nucleoicons/SectionNucleoIcons";
import Footer from "./Footer/Footer";
import SectionExamples from "./Nucleoicons/SectionExamples";

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <IndexHeader />
        <Content />
        <SectionNucleoIcons />
        <Footer/>
        {/* <Services /> */}
    </div>
  );
};

export default HomePage;
