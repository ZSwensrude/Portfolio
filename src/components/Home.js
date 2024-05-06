import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Button } from "@nextui-org/react";
import './components.css';

const Home = ({ onSelectTab }) => {
  return (
    <>
      <div className="carousel">
        <p className="headerText">
          Welcome to my site! Here is a preview of some projects I have worked on during my time at MacEwan University!
        </p>
        <br />
        <Carousel 
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
        >
          <>
            <p className="carouselText">Lich's Lair: A 2D Roguelike made in Unity</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/Projects/LichsLair.png`}
              alt="Lich's Lair tutorial room"
            />
            <Button onClick={() => onSelectTab('projects')} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg imageButton">More Info</Button>
          </>
          <>
            <p className="carouselText">Mac-UN: A Model UN Conference Webapp</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/Projects/Mac-UN.png`}
              alt="Mac-UN web app front page"
            />
            <Button onClick={() => onSelectTab('projects')} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg imageButton">More Info</Button>
          </>
          <>
            <p className="carouselText">DuckyBot: A 3D printed human-following robot</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/Projects/DuckyBot.jpg`}
              alt="Ducky bot, a 3d printed robot in the shape of a duck"
            />
            <Button onClick={() => onSelectTab('projects')} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg imageButton">More Info</Button>
          </>
          <>
            <p className="carouselText" color="secondary">Space Evaders: A 3D endless runner game created in Unity</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/Projects/SpaceEvaders.png`}
              alt="in game screenshot from space evaders"
            />
            <Button onClick={() => onSelectTab('projects')} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg imageButton">More Info</Button>
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