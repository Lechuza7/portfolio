import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../contexts/LangContext";
import certificatesData from "../data/certificates.json";
import CertificateCard from "./CertificateCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Typography, Box } from "@mui/material";

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

  const customRenderThumb = (certificates) =>
    certificates.map((certificate) => {
      console.log(certificate);
      return <img src={certificate.props.image} alt="cover-img" />;
    });

  return lang?.lang === "esp" ? (
    <div
      id="my-certificates"
      style={{ backgroundColor: "#CBC5AA", paddingTop: "1rem", paddingBottom: "2rem" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white" }}
        component="div"
        gutterBottom
      >
        Certificados
      </Typography>
            
      <Carousel renderThumbs={customRenderThumb} showStatus={false} >
        {certificates.map((certificate, i) => {
          return <CertificateCard key={i} {...certificate} />;
        })}
      </Carousel>
  
    </div>
  ) : (
    <div
    id="my-certificates"
    style={{ backgroundColor: "#CBC5AA", paddingTop: "1rem", paddingBottom: "2rem" }}
  >
    <Typography
      variant="h4"
      sx={{ color: "white" }}
      component="div"
      gutterBottom
    >
      Certificates
    </Typography>
          
    <Carousel renderThumbs={customRenderThumb} showStatus={false} >
      {certificates.map((certificate, i) => {
        return <CertificateCard key={i} {...certificate} />;
      })}
    </Carousel>

  </div>
  );
}

export default Certificates;
