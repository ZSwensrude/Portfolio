import React from "react";
import {Button} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import projectList from '../projects.json';
import './components.css'

const Projects = () => {
  return (
    <div className="projectCards">
      <p className="headerText">Here are some of my more interesting projects:</p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projectList.map( (project, index) => (
          <div key={`project-${index}`} >
            <Card className="h-full w-full max-w-full rounded-top object-cover object-center">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-top"
              >
                <img
                  src={`${process.env.PUBLIC_URL}${project.img}`}
                  className="cardImage"
                  alt={project.title + " image"}
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {project.title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                  {project.tags}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center">
                  {project.github !== "" && (
                    <Tooltip content="See the code!">
                      <Button 
                        isIconOnly 
                        color="primary" 
                        onClick={()=> window.open(project.github, "_blank")}
                        variant="light"
                      >
                        <img id="icon" src={`${process.env.PUBLIC_URL}/images/GitHub-logo.png`} alt="github logo"/>
                      </Button>
                    </Tooltip>
                  )}
                  {project.link !== "" && (
                    <Tooltip content="See it in action!">
                      <Button 
                        className="projectButton bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        color="success" 
                        onClick={()=> window.open(project.link, "_blank")}
                      >
                        {project.action}
                      </Button>
                    </Tooltip>
                  )}
                </div>
                <Typography className="font-normal">{project.date}</Typography>
              </CardFooter>
            </Card>
          </div>
        ) )}
        <Card className="h-full w-full max-w-full rounded-top object-cover object-center">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-top"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Projects/Portfolio.png`}
                  className="cardImage"
                  alt="ui/ux review check"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  My Portfolio
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                  Tailwind, NextUI, React, JavaScript, Node.js
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center">
                  <Tooltip content="See the code!">
                    <Button 
                      isIconOnly 
                      color="primary" 
                      onClick={()=> window.open("https://github.com/ZSwensrude/Portfolio", "_blank")}
                      variant="light"
                    >
                      <img id="icon" src={`${process.env.PUBLIC_URL}/images/GitHub-logo.png`} alt="github logo"/>
                    </Button>
                  </Tooltip>
                  <Tooltip content="See it in action!">
                    <Button 
                      className="projectButton bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      color="success" 
                      onClick={()=> window.open("https://zswensrude.github.io/Portfolio/", "_blank")}
                    >
                      {"Ever heard of recursion?"}
                    </Button>
                  </Tooltip>
                </div>
                <Typography className="font-normal">In Progress!</Typography>
              </CardFooter>
            </Card>
      </div>
    </div>
  );
};

export default Projects;

/*

<Card>
              <CardHeader>
                {project.title}
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image 
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={project.img}
                />
              </CardBody>

            </Card>

 */