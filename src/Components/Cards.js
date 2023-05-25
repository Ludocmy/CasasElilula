import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these epic destinations! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../Img/DSC04731.jpeg")}
              text="Explore the Greek Isands"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../Img/DSC04352.jpeg")}
              text="Experience kitesurfing in ideal conditions!"
              label="Kitesurfing"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../Img/DSC01453.jpeg")}
              text="Amazing opportunities for phtography!"
              label="Photography"
              path="/products"
            />
            <CardItem
              src={require("../Img/DSC04107.jpeg")}
              text="Experience the cities culture"
              label="Culture"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
