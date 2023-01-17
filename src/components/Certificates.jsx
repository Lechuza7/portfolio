import React, { useContext, useEffect, useState} from 'react';
import { LangContext } from "../contexts/LangContext";
import certificatesData from "../data/certificates.json";
import CertificateCard from './CertificateCard';

import { Typography, Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel';


function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCertificates(certificatesData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (certificates.length === 0) {
    return <div>Loading...please wait</div>;
  }

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
      <Carousel autoPlay={true} >
      {
        certificates.map((certificate, i) => {
          return <CertificateCard key={i} {...certificate}/>
        })}
    </Carousel>
    </div>
  ) : (
<div id="my-certificates">
      <Typography
        variant="h4"
        sx={{ color: "#898574" }}
        component="div"
        gutterBottom
      >
        Certificates
      </Typography>
      <Carousel>
      {
        certificates.map((certificate, i) => {
          return <CertificateCard key={i} {...certificate}/>
        })}
    </Carousel>
    </div>
  );
};

export default Certificates;