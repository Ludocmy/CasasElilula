import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/pages/Home";
import Experiences from "./Components/pages/Experiences";
import OurConcept from "./Components/pages/OurConcept";
import Book from "./Components/pages/Book";
import Accomodations from "./Components/pages/Accomodations";
import AboutArea from "./Components/pages/AboutArea";
import Gallery from "./Components/pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-concept" element={<OurConcept />} />
          <Route exact path="/accomodations" element={<Accomodations />} />
          <Route exact path="/experiences" element={<Experiences />} />
          <Route exact path="/experiences" element={<Experiences />} />
          <Route exact path="/about-area" element={<AboutArea />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/book" element={<Book />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
