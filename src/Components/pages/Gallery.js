import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ImgGallery from "../ImgGallery";

function Gallery() {
  const galleryImages = [
    {
      img: "Img/DSC04326.jpeg",
    },
    {
      img: "Img/DSC03840.jpeg",
    },
    {
      img: "Img/DSC01453.jpeg",
    },
    {
      img: "Img/DSC01574.jpeg",
    },
    {
      img: "Img/DSC03008.jpeg",
    },
    {
      img: "Img/DSC03847.jpeg",
    },
    {
      img: "Img/DSC04107.jpeg",
    },
    {
      img: "Img/DSC04222.jpeg",
    },

    {
      img: "Img/DSC04326.jpeg",
    },
    {
      img: "Img/DSC04352.jpeg",
    },
    {
      img: "Img/DSC04508.jpeg",
    },
    {
      img: "Img/DSC04597.jpeg",
    },
    {
      img: "Img/DSC04625.jpeg",
    },
    {
      img: "Img/DSC04665.jpeg",
    },
    {
      img: "Img/DSC04731.jpeg",
    },
    {
      img: "Img/DSC04772.jpeg",
    },
    {
      img: "Img/DSC04791.jpeg",
    },
  ];

  return (
    <>
      <ImgGallery galleryImages={galleryImages} />
      <Footer />
    </>
  );
}

export default Gallery;
