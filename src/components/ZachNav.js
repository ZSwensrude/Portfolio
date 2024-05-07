import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import './components.css'
import { useMediaQuery } from "react-responsive";

const ZachNav = ({ activeTab, onSelectTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: `(max-width: 540px)` });

  const onMenuClick = (selection) => {
    onSelectTab(selection);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div style={{ display:`${isSmallScreen ? "block" : "none"}` }} >
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} >
          <NavbarContent>
            <NavbarMenuToggle 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
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
            <NavbarItem>
              <Button 
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                isIconOnly 
                color="secondary" 
                onClick={()=> window.open("https://github.com/ZSwensrude", "_blank")}
              >
                <img id="icon" src={`${process.env.PUBLIC_URL}/images/GitHub-logo.png`} alt="github logo"/>
              </Button>
            </NavbarItem>
            <NavbarItem > 
              <Button 
                isIconOnly 
                onClick={()=> window.open("https://www.linkedin.com/in/zachary-swensrude/", "_blank")}
              >
                <img id="icon" src={`${process.env.PUBLIC_URL}/images/LinkedIn_icon.svg.png`} alt="linkedin logo"/>
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            <NavbarMenuItem>
              <Link 
                className="topText"
                color={ activeTab === 'home' ? "primary" : "foreground"} 
                onClick={() => onMenuClick('home')} 
              >
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link 
                className="topText"
                color={ activeTab === 'projects' ? "primary" : "foreground"}
                onClick={() => onMenuClick('projects')}
              >
                Projects
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link 
                className="topText"
                color={ activeTab === 'about' ? "primary" : "foreground"} 
                onClick={() => onMenuClick('about')}
              >
                About Me
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link 
                  className="topText"
                  color={ activeTab === 'resume' ? "primary" : "foreground"} 
                  onClick={() => onMenuClick('resume')}
                >
                Resume/CV
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>

      <div style={{ display:`${isSmallScreen ? "none" : "block"}` }}>
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
                onClick={() => onMenuClick('home')} 
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link 
                className="topText"
                color={ activeTab === 'projects' ? "primary" : "foreground"}
                onClick={() => onMenuClick('projects')}
              >
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link 
                className="topText"
                color={ activeTab === 'about' ? "primary" : "foreground"} 
                onClick={() => onMenuClick('about')}
              >
                About Me
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link 
                  className="topText"
                  color={ activeTab === 'resume' ? "primary" : "foreground"} 
                  onClick={() => onMenuClick('resume')}
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
                <img id="icon" src={`${process.env.PUBLIC_URL}/images/GitHub-logo.png`} alt="github logo"/>
              </Button>
            </NavbarItem>
            <NavbarItem > 
              <Button 
                isIconOnly 
                onClick={()=> window.open("https://www.linkedin.com/in/zachary-swensrude/", "_blank")}
              >
                <img id="icon" src={`${process.env.PUBLIC_URL}/images/LinkedIn_icon.svg.png`} alt="linkedin logo"/>
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  ) 
};

export default ZachNav;