import { useState, useEffect, useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import OpenInNew from "@mui/icons-material/Visibility";


function CertificateCard(certificate) {
  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return lang?.lang === "esp" ? (
    
    <Card variant="solid" sx={{ width: "45%", length: "65%", margin: "auto", backgroundColor: "rgba(2,2,2,0.2)" }}>
    <Typography level="h2" fontSize="lg" sx={{ mb: 0.5 }}>
      <b>{certificate.title}</b>
    </Typography>
    
    <Typography level="body2">{certificate.spDate}</Typography>

    <AspectRatio sx={{ my: 2, objectFit: "contain", width:"auto" }} >
      <img
        src={certificate.image}
        srcSet={certificate.image}
        loading="lazy"
        alt=""
      />
    </AspectRatio>

    <Box sx={{ display: 'flex' }}>
      <div>
        <Typography level="body3">Certificado por:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
          {certificate.entity}
        </Typography>
      </div>     
      <Button
        variant="solid"
        size="sm"
        color="primary"
        aria-label="Certificate"
        sx={{ ml: 'auto', fontWeight: 600 }}
      >
        <Link href={certificate.url} target="_blank" overlay underline="none">
        <OpenInNew />
        </Link>
      </Button>      
    </Box>
  </Card>
  
  ) : (
    <Card variant="solid" sx={{ width: "45%", length: "65%", margin: "auto", backgroundColor: "rgba(2,2,2,0.2)" }}>
    <Typography level="h2" fontSize="lg" sx={{ mb: 0.5 }}>
      <b>{certificate.title}</b>
    </Typography>
    
    <Typography level="body2">{certificate.enDate}</Typography>

    <AspectRatio sx={{ my: 2, objectFit: "contain", width:"auto" }} >
      <img
        src={certificate.image}
        srcSet={certificate.image}
        loading="lazy"
        alt=""
      />
    </AspectRatio>

    <Box sx={{ display: 'flex' }}>
      <div>
        <Typography level="body3">Certified by:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
          {certificate.entity}
        </Typography>
      </div>     
      <Button
        variant="solid"
        size="sm"
        color="primary"
        aria-label="Certificate"
        sx={{ ml: 'auto', fontWeight: 600 }}
      >
        <Link href={certificate.url} target="_blank" overlay underline="none">
        <OpenInNew />
        </Link>
      </Button>      
    </Box>
  </Card>
  );
};

export default CertificateCard;





