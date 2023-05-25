import React from "react";
import CardItem from "./CardItem";
import "../App.css";
import "./Accomodations.css";

function CasasView() {
  return (
    <div className="casas-view">
      <div className="text-cont">
        <p className="a">Accomodations</p>
        <p className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sem
          rhoncus dolor dignissim cursus et vel elit. Maecenas ut tellus augue.
          Nunc rhoncus mauris eget efficitur tincidunt. Aenean lobortis faucibus
          metus, et consectetur ipsum lobortis nec. Curabitur placerat finibus
          risus in vestibulum. In facilisis cursus orci a consequat. In interdum
          felis ut varius commodo.
        </p>
      </div>
      <hr />
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={require("../Img/DSC04731.jpeg")}
                text="Casa Eli"
                path="/services"
              />
              <CardItem
                src={require("../Img/DSC04352.jpeg")}
                text="Casa Lu"
                label="Kitesurfing"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={require("../Img/DSC01574.jpeg")}
                text="Casa La"
                label="Photography"
                path="/products"
              />
              <CardItem
                src={require("../Img/DSC04107.jpeg")}
                text="Casa Elilula"
                label="Culture"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasasView;
