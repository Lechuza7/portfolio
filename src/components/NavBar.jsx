import React, { useState, useEffect, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuItem from "@mui/material/MenuItem";
import { LangContext } from "../contexts/LangContext";

import espFlag from "../assets/img/esp-flag.png";
import engFlag from "../assets/img/eng-flag.png";



function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [lang, setLang] = useState(undefined);
  const language = useContext(LangContext);

  useEffect(() => {
    setLang(language);
  }, [language]);

  const handleClick = () => {
    if (lang?.lang === "esp") {
      language.setLang("eng");
    } else {
      language.setLang("esp");
    }
  };

  return lang?.lang === "esp" ? (
    <AppBar position="static" sx={{ backgroundColor: "#CBC5AA" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Toolbar disableGutters>


            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BIENVENID@!
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-projects">
                    <Typography textAlign="center" >Proyectos</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-skills">
                    <Typography textAlign="center">Skills</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-certificates">
                    <Typography textAlign="center">Certificados</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="mailto:marc.cuestacarabasa@gmail.com">
                    <Typography textAlign="center">Contacto</Typography>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WELCOME!
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-projects">
                  <Typography sx={{textAlign:"center", color:"white"}}>Proyectos</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-skills">
                  <Typography sx={{textAlign:"center", color:"white"}}>Skills</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-certificates">
                  <Typography sx={{textAlign:"center", color:"white"}}>Certificados</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="mailto:marc.cuestacarabasa@gmail.com">
                  <Typography sx={{textAlign:"center", color:"white"}}>Contacto</Typography>
                </Button>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => handleClick()}>
            <img src={engFlag} alt="English" />
          </Button>
        </Box>
      </Box>
    </AppBar>
  ) : (
    <AppBar position="static" sx={{ backgroundColor: "#CBC5AA" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WELCOME!
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-projects">
                    <Typography textAlign="center">Projects</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-skills">
                    <Typography textAlign="center">Skills</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#my-certificates">
                    <Typography textAlign="center">Certificates</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="mailto:marc.cuestacarabasa@gmail.com">
                    <Typography textAlign="center">Contact</Typography>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WELCOME!
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-projects">
                  <Typography sx={{textAlign:"center", color:"white"}}>Projects</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-skills">
                  <Typography sx={{textAlign:"center", color:"white"}}>Skills</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="#my-certificates">
                  <Typography sx={{textAlign:"center", color:"white"}}>Certificates</Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="mailto:marc.cuestacarabasa@gmail.com">
                  <Typography sx={{textAlign:"center", color:"white"}}>Contact</Typography>
                </Button>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => handleClick()}>
            <img src={espFlag} alt="English" />
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
export default NavBar;
