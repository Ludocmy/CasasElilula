import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ImgGallery from "../ImgGallery";

function Gallery() {
  const galleryImages = [
    {
      img: "../Img/DSC04326.jpeg",
    },
    {
      img: "../Img/DSC08278.JPG",
    },
    {
      img: "../Img/DSC08235.jpeg",
    },
    {
      img: "../Img/DSC08278.JPG",
    },
    {
      img: "../Img/DSC08280.jpeg",
    },
    {
      img: "../Img/DSC08321.jpeg",
    },
    {
      img: "../Img/DSC09083.jpeg",
    },
    {
      img: "../Img/DSC09067.jpeg",
    },
    {
      img: "../Img/DSC09066.jpeg",
    },
    {
      img: "../Img/DSC09065.jpeg",
    },
    {
      img: "../Img/DSC09059.jpeg",
    },
    {
      img: "../Img/DSC09037.jpeg",
    },
    {
      img: "../Img/DSC08620.jpeg",
    },
    {
      img: "../Img/DSC08619.jpeg",
    },
    {
      img: "../Img/DSC01453.jpeg",
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
      img: "Img/DSC08237.jpeg",
    },
    {
      img: "Img/DSC08238.jpeg",
    },
    {
      img: "Img/DSC08248.jpeg",
    },
    {
      img: "Img/DSC08252.jpeg",
    },
    {
      img: "Img/DSC08265.jpeg",
    },
    {
      img: "Img/DSC08266.jpeg",
    },
    {
      img: "Img/DSC08267.jpeg",
    },
    {
      img: "Img/DSC08268.jpeg",
    },
    {
      img: "https://github.com/Ludocmy/CasasElilula/blob/main/public/Img/DSC01453.jpeg",
    },
    {
      img: "./Img/DSC04326.jpeg",
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
