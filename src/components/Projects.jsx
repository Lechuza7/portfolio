import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from "../projects.json";

import { Typography, Box } from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProjects(projectsData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ backgroundColor: "#CBC5AA", paddingTop: "4rem"}} >

      <Typography variant="h4" sx={{ color: "white"}} component="div" gutterBottom>My projects</Typography>
      
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
      {projects.map((project, i) => {
        return (
        <ProjectCard key={i} {...project} />
        );
      })};
      </Box>

    </div>
  );
};

export default Projects