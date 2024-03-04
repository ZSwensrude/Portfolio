import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar} from "@nextui-org/react";
import './components.css'

const ZachNav = ({ activeTab, onSelectTab }) => {
  return (
    <Navbar isBordered className="topText" >
      <NavbarBrand className="navbarPad">
        <Avatar 
          src="https://media.licdn.com/dms/image/D5603AQFIiI5iXHFkUA/profile-displayphoto-shrink_200_200/0/1702000182915?e=2147483647&v=beta&t=7ab4VsaAzXnL2XBtAv0DNpD8sBh_folxsZwSGlk_a_w" 
          className="w-12 h-12 text-large"
          isBordered color="warning" 
        />
        <div className="name" >
          <p className="nameText">Zachary</p>
          <p className="nameText">Swensrude</p>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link 
            className="topText"
            color={ activeTab === 'home' ? "primary" : "foreground"} 
            onClick={() => onSelectTab('home')} 
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            className="topText"
            color={ activeTab === 'projects' ? "primary" : "foreground"}
            onClick={() => onSelectTab('projects')}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            className="topText"
            color={ activeTab === 'about' ? "primary" : "foreground"} 
            onClick={() => onSelectTab('about')}
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
              className="topText"
              color={ activeTab === 'resume' ? "primary" : "foreground"} 
              onClick={() => onSelectTab('resume')}
            >
            Resume/CV
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            isIconOnly 
            color="secondary" 
            onClick={()=> window.open("https://github.com/ZSwensrude", "_blank")}
          >
            <img id="icon" src={"images/GitHub-logo.png"} alt="github logo"/>
          </Button>
        </NavbarItem>
        <NavbarItem > 
          <Button 
            isIconOnly 
            onClick={()=> window.open("https://www.linkedin.com/in/zachary-swensrude/", "_blank")}
          >
            <img id="icon" src={"images/LinkedIn_icon.svg.png"} alt="linkedin logo"/>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default ZachNav;