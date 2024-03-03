import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Button, Link } from "@nextui-org/react";
import './components.css';
import Lich from '../images/Projects/LichsLair.png';
import Mac from '../images/Projects/Mac-UN.png';
import Ducky from '../images/Projects/DuckyBot.jpg';
import Space from '../images/Projects/SpaceEvaders.png'

const Home = () => {
  return (
    <>
      <div className="carousel">
        <p className="headerText">
          Welcome to my site! Here is a preview of some projects I have worked on during my time at MacEwan University!
        </p>
        <br />
        <Carousel 
          className="rounded-xl"
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
        >
          <>
            <p className="carouselText">Lich's Lair: A 2D Roguelike made in Unity</p>
            <img
              src={Lich}
              alt="Lich's Lair tutorial room"
              className="h-full w-full object-cover"
            />
            {/* <Button className="imageButton" color="secondary">More Info</Button> */}
          </>
          <>
            <p className="carouselText">Mac-UN: A Model UN Conference Webapp</p>
            <img
              src={Mac}
              alt="Mac-UN web app front page"
              className="h-full w-full object-cover"
            />
            {/* <Button className="imageButton" color="secondary">More Info</Button> */}
          </>
          <>
            <p className="carouselText">DuckyBot: A 3D printed human-following robot</p>
            <img
              src={Ducky}
              alt="Ducky bot, a 3d printed robot in the shape of a duck"
              className="h-full w-full object-cover"
            />
            {/* <Button className="imageButton" color="secondary">More Info</Button> */}
          </>
          <>
            <p className="carouselText" color="secondary">Space Evaders: A 3D endless runner game created in Unity</p>
            <img
              src={Space}
              alt="in game screenshot from space evaders"
              className="h-full w-full object-cover"
            />
            {/* <Button className="imageButton" color="secondary">More Info</Button> */}
          </>
        </Carousel>
        <br />
        <p className="descriptionText">
          I expect to graduate in June 2024, and have been keeping extra busy during my last semester with various classes, projects, and at my internship as a full-stack developer at Dominarlo
        </p>
      </div>
    </>
  );
};

export default Home;