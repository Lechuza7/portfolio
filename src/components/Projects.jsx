import React, { useState, useEffect, useContext } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import { LangContext } from "../contexts/LangContext";

import { Typography, Box } from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProjects(projectsData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (projects.length === 0) {
    return <div>Loading...please wait</div>;
  }

  return lang?.lang === "esp" ? (
    <div
      id="my-projects"
      style={{ backgroundColor: "#CBC5AA", marginTop: "13rem", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white" }}
        component="div"
        gutterBottom
      >
        Mis proyectos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </Box>
    </div>
  ) : (
    <div
      id="my-projects"
      style={{ backgroundColor: "#CBC5AA", marginTop: "13rem", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white" }}
        component="div"
        gutterBottom
      >
        My projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </Box>
    </div>
  );
};

export default Projects;



