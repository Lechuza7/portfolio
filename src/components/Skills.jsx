import React, { useContext, useState, useEffect } from "react";
import skillsImg from "../assets/img/skills-img.png";
import { LangContext } from "../contexts/LangContext";
import "../components/Skills.css";
import { Typography, Box } from "@mui/material";

function Skills() {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    <div id="my-skills" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        Mis Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          id="skills-tree"
          src={skillsImg}
          alt="Skills"     
        />
      </Box>
    </div>
  ) : (
    <div id="my-skills" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        My skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          id="skills-tree"
          src={skillsImg}
          alt="Skills"     
        />
      </Box>
    </div>
  );
}

export default Skills;
