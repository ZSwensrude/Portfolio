import React from "react";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
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
                  src={project.img}
                  className="cardImage"
                  alt="ui/ux review check"
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
                <div className="flex items-center -space-x-3">
                  <Tooltip content="See the code!">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal">{project.date}</Typography>
              </CardFooter>
            </Card>
          </div>
        ) )}
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