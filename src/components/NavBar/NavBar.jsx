import React, { useState } from "react";
import { Link } from "react-router-dom";

//
// If you want to see the explanation of most of the functions,
// click on the image in the readme of this project
//
function NavBar() {
  const [click, setClick] = useState(false);
  //  1_ related to the navbar change on scroll
  const [navbar, setNavbar] = useState(false);
  //
  const [logo, setLogo] = useState(false);
  //

  // to close mobile
  const closeMobileMenu = () => setClick(false);

  //
  //
  // 3_ related to the navbar change on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };
  // 2_ related to the navbar change on scroll
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header></header>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link
            to="/"
            className={logo ? "logo active" : "logo"}
            onClick={closeMobileMenu}
          >
            SWAPY
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links  active"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;





