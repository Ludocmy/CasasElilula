import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mainLogo from "../Logo/Logo_NameOnly.png";
import iconLogo from "../Logo/Menu_btn1Single.png";

function NavBar() {
  // Set waht happens to the click
  const [click, setClick] = useState(false);
  // changes useState to opposite of what it is
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 980) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* This toggles the Hamburger menu icon from one position to the other (Cliick is defined above) */}
          <div className="menu-icon" onClick={handleClick}>
            <img
              src={
                click
                  ? require("../Logo/Menu_btn1Up.png")
                  : require("../Logo/Menu_btn1.png")
              }
            />
          </div>
          {/* make nav menu dissapear on-click */}

          <div class="navbar-slider">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="./pages/Home.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./pages/OurConcept.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Our Concept
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./pages/Accomodations.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Accomodations
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./pages/Experiences.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./pages/AboutArea.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About the area
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./pages/Gallery.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="./pages/Book.js"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Bookings
                </a>
              </li>
            </ul>
          </div>

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={mainLogo} />
          </Link>

          {/* <div className="nav-btn">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--nav"
            >
              Bookings
            </Button>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
