import React from "react";
import skillsImg from "../assets/img/skills-img.png";

import { Typography, Box } from "@mui/material";

function Skills() {
  return (
    <div id="my-skills" style={{ paddingTop: "0.5rem" }}>
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        My skills
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
      <img
        src={skillsImg}
        alt="Skills Image"
        height="50%"
        style={{ marginBottom: "1rem" }}
      />
      </Box>
    </div>
  );
}

export default Skills;
