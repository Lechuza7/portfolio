import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../contexts/LangContext";
import photo from "../assets/img/avatar.jpg";
import githubLogo from "../assets/img/github-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.png";
import cvIcon from "../assets/img/CV-icon.png";
import "../components/About.css";
import { Avatar, Box, Button, Typography } from "@mui/material";

function About() {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    <Box
      id="about-box"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        height: 300,
      }}
    >
      <Box
        id="avatar-box"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          id="avatar-pic"
          alt="Marc's photo"
          src={photo}
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            marginTop: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
      <Box
        id="bio-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          height: 200,
          marginLeft: "1rem",
          marginRight: "1rem",
          marginTop: "3rem",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "1rem", color: "#898574" }}
        >
          Marc Cuesta Carabasa
        </Typography>
        <Typography variant="body2">
          <p>
            Soy un desarrollador web full-stack apasionado por aprender y
            evolucionar, perfeccionista y que presta gran atención a los
            detalles. Para mí es muy importante trabajar con buen ambiente entre
            compañeros, e implicarme en los proyectos aportando lo mejor que
            pueda dar.
          </p>
          <p>
            Me considero trabajador, organizado, con ganas y capacidad para
            aprender, acostumbrado a ser resolutivo tanto en equipo como
            individualmente, y orientado a buscar el mejor resultado posible.
          </p>
          <p>
            Busco una oportunidad para reorientarme profesionalmente e iniciar
            mi carrera como programador, ofreciendo autoexigencia e implicación
            en los proyectos y contribuyendo a generar un ambiente sano y
            orientado a resultados y trabajo en equipo. Estoy preparado para
            ello.
          </p>
          <p>¿Quieres conocerme?</p>
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
            href="https://drive.google.com/file/d/1PTuQe1dVNhQAGwfCPsskgDcudIxCNJGL/view?usp=sharing"
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
  ) : (
    <Box
      id="about-box"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        height: 300,
      }}
    >
      <Box
        id="avatar-box"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          id="avatar-pic"
          alt="Marc's photo"
          src={photo}
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            marginTop: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
      <Box
        id="bio-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          height: 200,
          marginLeft: "1rem",
          marginRight: "1rem",
          marginTop: "3rem",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "1rem", color: "#898574" }}
        >
          Marc Cuesta Carabasa
        </Typography>
        <Typography variant="body2">
          <p>
            I am a full-stack web developer passionate about learning and
            evolving, perfectionist and with great attention to detail. For me
            it is very important to work with a good atmosphere among
            colleagues, and to get involved in the projects contributing the
            best that I can give.
          </p>
          <p>
            I consider myself a hard-working, organized person, eager and
            capable of learning, accustomed to being decisive both in a team and
            individually, and oriented to seek the best possible result.
          </p>
          <p>
            I am looking for an opportunity to reorient myself professionally
            and start my career as a developer, offering self-demand and
            involvement in projects and contributing to generating a healthy
            environment oriented towards results and teamwork. I'm ready for it.
          </p>
          <p>Do you want to meet me?</p>
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
