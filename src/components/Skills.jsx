import React, { useContext, useState, useEffect } from "react";
import skillsImg from "../assets/img/skills-img.png";
import { LangContext } from "../contexts/LangContext";

import { Typography, Box } from "@mui/material";

function Skills() {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    <div id="my-skills" style={{ paddingTop: "0.5rem" }}>
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        Skills
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
          src={skillsImg}
          alt="Skills"
          height="50%"
          style={{ marginBottom: "1rem" }}
        />
      </Box>
    </div>
  ) : (
    <div id="my-skills" style={{ paddingTop: "0.5rem" }}>
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
          src={skillsImg}
          alt="Skills"
          height="50%"
          style={{ marginBottom: "1rem" }}
        />
      </Box>
    </div>
  );
}

export default Skills;
