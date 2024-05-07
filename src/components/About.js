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
            probably tell from my Projects section), but I also enjoy all types of development, and even the 
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
          Not only is my major nerdy, but I am too, with hobbies like Dungeons & Dragons, playing videogames, and 
          reading manga. More importantly, I genuinely enjoy working hard, as I am someone who would rather be busy
          than bored, and I take pride in my work.
        </p>
      </div>
    </>
  );
};

export default About;