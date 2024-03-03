import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import slime from '../images/SlimeBig1.png'
import './components.css'

const ZachNav = ({ activeTab, onSelectTab }) => {
  return (
    <Navbar isBordered className="topText" >
      <NavbarBrand>
        <img className="smallImage" src={slime} alt="pixel art slime" />
        <p className="font-bold text-inherit">Zachary Swensrude</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link 
            color={ activeTab === 'home' ? "primary" : "foreground"} 
            onClick={() => onSelectTab('home')} 
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color={ activeTab === 'projects' ? "primary" : "foreground"}
            onClick={() => onSelectTab('projects')}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color={ activeTab === 'about' ? "primary" : "foreground"} 
            onClick={() => onSelectTab('about')}
          >
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link 
            color={ activeTab === 'resume' ? "primary" : "foreground"} 
            onClick={() => onSelectTab('resume')}
          >
            Resume/CV
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default ZachNav;