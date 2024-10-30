"use client";
import React, { useState, useEffect } from "react";
import louvre from "../../public/louvres04.jpeg";
import croissant from "../../public/croissant05.jpeg";
import vignoble02 from "../../public/vignoble02.jpeg";
import toureiffel03 from "../../public/tour-eiffel03.jpeg";
import notreDame from "../../public/notre-dame01-scaled.jpeg";
import logo from "../../public/logo3.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryButton from './PrimaryButton';

const images = [
  louvre,
  croissant,
  vignoble02,
  toureiffel03,
  notreDame,
  // Add more image paths as needed
];

const HeroImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center" >
      <div
        className="w-screen h-screen bg-cover bg-center  absolute top-0 left-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex].src})`,
          opacity: 0.3,
        }}
      />
      <Image src={logo} alt="logo" className=" z-50" width={800} height={450}/>
      <div className="mt-8 z-50">
        <PrimaryButton text="Book Now" />
      </div>
    </div>
  );
};

export default HeroImage;
