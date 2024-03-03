import React from "react";
import { Carousel } from "@material-tailwind/react";
import './components.css';
import Lich from '../images/Projects/LichsLair.png';
import Mac from '../images/Projects/Mac-UN.png';
import Ducky from '../images/Projects/DuckyBot.jpg';
import Space from '../images/Projects/SpaceEvaders.png'

const Home = () => {
  return (
    <div className="carousel">
      <p>Home</p>
      <Carousel 
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
      >
        <img
          src={Lich}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={Mac}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={Ducky}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={Space}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Home;