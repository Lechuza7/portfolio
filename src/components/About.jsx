import React from "react";
import photo from "../assets/img/avatar.jpg";
import githubLogo from "../assets/img/github-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.png";
import cvIcon from "../assets/img/CV-icon.png";

import { Avatar, Box, Button, Typography } from "@mui/material";

function About() {
  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        m: 8,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >

       <Avatar
        alt="Marc's photo"
        src={photo}
        sx={{ width: 200, height: 200, display: "flex", flexDirection: "row", justifyContent: "center" }}
      /> 
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          height: 250,
          marginLeft: "2rem",
          marginTop: "1rem",
        }}
      >
        <Typography variant="h5" component="div">Marc Cuesta Carabasa</Typography>
        <Typography variant="body2">
          Soy un desarrollador web full-stack apasionado por aprender y
          evolucionar, perfeccionista y que presta gran atención a los detalles.
          Me comunico de forma efectiva y asertiva para brindar excelentes
          resultados. Busco un rol de desarrollador web junior a tiempo completo
          para crecer y desarrollar mis habilidades, ofreciendo autoexigencia e
          implicación en los proyectos y generando un ambiente sano y orientado
          al trabajo en equipo.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            href="https://github.com/Lechuza7"
            color="secondary"
            target="_blank"
            sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              height="50%"
              style={{ marginRight: "0.3rem" }}
            />
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/marccuestacarabasa/"
            target="_blank"
            sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              height="46%"
              style={{ marginRight: "0.3rem" }}
            />
            Linkedin
          </Button>
          <Button
            href="https://drive.google.com/file/d/1Ek8BfWGN9jn3lqZiJQwctTsSgqbMsPSz/view?usp=sharing"
            target="_blank"
            sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
          >
            <img
              src={cvIcon}
              alt="CV Icon"
              height="48%"
              style={{ marginRight: "0.3rem" }}
            />
            CV
          </Button>
        </Box>
      </Box>
    </Box>

  );
}

export default About;
