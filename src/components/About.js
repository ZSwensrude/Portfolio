import React from "react";
import {Image} from "@nextui-org/react";
import "./components.css";

const About = () => {
  return (
    <>
      <p className="headerText">
        All About Zach
      </p>
      <div className="grid-container">
        <div className="item">
          <p>
            Hey! I am Zachary but I usually go by Zach. As of June 2024 I will be a MacEwan Alumni with a Bachelor of
            Science with a major in Computer Science and a minor in Psychology. Thanks for taking the time to read 
            about me!
          </p>
          <br/>
          <p>
            When it comes to programming, I am most experienced in Full Stack and Game Development (as you can 
            probably tell from my Projects section), but I enjoy all types of development, as well as the 
            research side of the field. I made sure to take as many different programming classes as I could 
            during my time at MacEwan so that I could take on any challenge in (almost) any language and succeed!
          </p>
          <br/>
          <p>
            As you are reading this, I am probably either working on something at my internship with Dominarlo, 
            working on making Mac-UN a real product, or working on one of the academic papers I am trying to publish 
            with XR Media Research Group!
          </p>
        </div>
        <div className="item-image">
          <Image
            isBlurred
            src={`${process.env.PUBLIC_URL}/images/me.jpg`}
            alt={"Me at AIMUN"}
            className="m-4"
          />
        </div>
      </div>
      <div className="about-bottom">
        <p>
          I am someone who would rather be busy than bored, and I enjoy taking pride in my work. 
          When not working, I can be found enjoying my hobbies like Dungeons & Dragons, playing 
          videogames, reading manga, and hiking. 
        </p>
        <br/>
        <p>
          If you have the time, play some of my games! Lich's Lair is my most fleshed out game and a successful run
          will likely take around 20 minutes (if you can beat it). Space Evaders is much simpler and better for shorter 
          sessions, as it is an infinite runner. Make sure to submit your highscore if you give it a go! Both have 
          input forms below the game that we used for some testing which you can also answer if you want to help us 
          out! The links to both can be found on my Projects page.
        </p>
        <br/>
        <div className="image-wrapper">
          <img 
            className="image-before" 
            src={`${process.env.PUBLIC_URL}/images/Cats.jpg`} 
            alt="logo" 
          />
          <img 
            className="image-hover" 
            src={`${process.env.PUBLIC_URL}/images/CatsClose.jpg`} 
            alt="logo" 
          />
        </div>
        <p className="fig" >
          Shout out to my cats who got me through University
        </p>
      </div>
    </>
  );
};

export default About;