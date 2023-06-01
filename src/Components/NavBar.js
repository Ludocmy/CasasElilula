import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mainLogo from "../Logo/Logo_NameOnly.png";

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

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/our-concept"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Concept
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/accomodations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Accomodations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experiences"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-area"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About the area
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Bookings
              </Link>
            </li>
          </ul>

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
