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
    <Card variant="outlined" sx={{ width: 320 }}>
    <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
      <b>{certificate.title}</b>
    </Typography>
    <Typography level="body2">{certificate.spDate}</Typography>

    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
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
  ) : (<div>Certificate in progress</div>)
};

export default CertificateCard;





