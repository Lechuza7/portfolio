import { useState, useEffect, useContext } from "react";
import { LangContext } from "../contexts/LangContext";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(project) {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return lang?.lang === "esp" ? (
    <Card sx={{ maxWidth: 300, minWidth: 200, margin: 2 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" href={project.url} target="_blank" >
            <VisibilityIcon />
          </IconButton>
        }
        title={project.title}
        subheader={project.spDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {project.techs}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Descripción
          </Typography>
          <Typography variant="body2">{project.spDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <Card sx={{ maxWidth: 300, minWidth: 200, margin: 2 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" href={project.url} target="_blank" >
            <VisibilityIcon />
          </IconButton>
        }
        title={project.title}
        subheader={project.enDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {project.techs}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Description
          </Typography>
          <Typography variant="body2">{project.enDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
