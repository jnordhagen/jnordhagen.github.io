import React from "react";
import { Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import Carousel from 'react-material-ui-carousel'

import ProjectCard from "../projectCard/ProjectCard";
import theme from "../../theme"
import HTRPaper from "../../assets/CS229_paper.pdf"

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectSlideshow = () => {

  const projects: Project[] = [
    { 
      title: "Chronos", 
      description: "A minimalist workout-tracking app that lets you create, execute, and save custom exercise routines.", 
      link: "https://github.com/jnordhagen/chronos" 
    },
    { 
      title: "Accurate Handwriting Transcription using Deep Learning", 
      description: "A project demonstrating handwritten text recognition using deep learning models, with a CRNN (convolutional recurrent neural network) architecture.", 
      link: HTRPaper }, 
    { 
      title: "Photo Wars", 
      // eslint-disable-next-line
      description: "A web platform for user-submitted and user-voted photo humor, inspired by the \
                    popular subreddit r/photoshopbattles. Photo Wars provides a centralized and \
                    streamlined interface for interacting with, sharing, and supporting photo comedy \
                    by allowing users to create and compete in a “photo war”, a low-stakes competition \
                    that has one user submitting an image for others to captions and submit photoshopped \
                    versions of the original. Submissions are immediately viewable by all users to be \
                    voted or commented on, and creators can gain points based on how well their submissions \
                    fare, creating a fun community based on hilarious visual gags.", 
      link: "https://github.com/jnordhagen/photowars" 
    },
    { 
      title: "Building the Internet", 
      description: "A custom implementation of large portions of the TCP/IP internet software, including the TCP sender and receiver, the IP router, and the network interface.", 
      link: "https://github.com/CS144/minnow" 
    },
    { 
      title: "Pintos Operating System", 
      description: "A course project that involved developing and augmenting the Pintos OS. \
                    We implemented multithreading capability, support for user processes, virtual memory, and a robust file system, all from scratch.", 
      link: "https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html" 
    }
  ];

  return (
    <Box paddingBottom={15}>
      <Carousel 
        sx={{height: "80vh", width: "60vw", overflowY: 'visible', overflowX: 'clip'}} 
        NextIcon={<ArrowForwardIosIcon/>} 
        PrevIcon={<ArrowBackIosIcon/>}
        swipe={false}
        navButtonsAlwaysVisible={true}
        animation={"slide"}
        duration={500}
        fullHeightHover={false}
        navButtonsProps={{ 
          style: {
            backgroundColor: theme.palette.background.default,
          }
        }} 
      >
        {
          projects.map( (project: Project, i: number) => 
            <Stack key={i} direction="row" sx={{height: "100%", width: "100%", justifyContent: "center"}}>
              <ProjectCard 
                projectTitle={project.title}
                projectDesc={project.description}
                projectUrl={project.link}
              />
            </Stack>        
          )
        }
      </Carousel>
    </Box>
  )
};

export default ProjectSlideshow;
