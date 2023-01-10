import React, { useContext, useEffect, useState} from 'react';
import { LangContext } from "../contexts/LangContext";

import { Typography, Box } from "@mui/material";

function Certificates() {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    <div id="my-certificates">
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        Certificados
      </Typography>
    </div>
  ) : (
    <div id="my-certificates">Certificates</div>
  );
};

export default Certificates;