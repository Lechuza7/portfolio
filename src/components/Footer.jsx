import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../contexts/LangContext";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CvIcon from '@mui/icons-material/ContactPage';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    <div
      id="my-projects"
      style={{ backgroundColor: "#898574", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
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
          <GitHubIcon></GitHubIcon>
        </Button>
        <Button
          href="https://www.linkedin.com/in/marccuestacarabasa/"
          target="_blank"
          sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
        >
          <LinkedInIcon></LinkedInIcon>
        </Button>
        <Button
          href="https://drive.google.com/file/d/10OAbFwROcQGMCRQhwTW3iBYHqzSNBnUV/view?usp=sharing"
          target="_blank"
          sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
        >
          <CvIcon></CvIcon>
        </Button>
        <Button
          href="mailto:marc.cuestacarabasa@gmail.com"
          target="_blank"
          sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
        >
          <MailIcon></MailIcon>
        </Button>
      </Box>
    </div>
  ): (
    <div
    id="my-projects"
    style={{ backgroundColor: "#898574", paddingTop: "2rem", paddingBottom: "2rem" }}
  >
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
        <GitHubIcon></GitHubIcon>
      </Button>
      <Button
        href="https://www.linkedin.com/in/marccuestacarabasa/"
        target="_blank"
        sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
      >
        <LinkedInIcon></LinkedInIcon>
      </Button>
      <Button
        href="https://drive.google.com/file/d/1B2ZNHBY_mNk5om5HsOpnZVazgmA3HSF_/view?usp=sharing"
        target="_blank"
        sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
      >
        <CvIcon></CvIcon>
      </Button>
      <Button
        href="mailto:marc.cuestacarabasa@gmail.com"
        target="_blank"
        sx={{ textTransform: "none", color: "#CBC5AA", height: "3rem" }}
      >
        <MailIcon></MailIcon>
      </Button>
    </Box>
  </div>
  )
}

export default Footer;
