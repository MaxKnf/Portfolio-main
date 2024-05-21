import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import myPicture from"

function ResponsiveAppBar() {

  const onClick = () => {
    window.location.href = "#skills";
  };

  return (
    <AppBar 
        sx={{ 
          backgroundColor: '#212121',
          position: "sticky",
          paddingTop: "10px",
          paddingBottom: "10px",
          top: 0,
          zIndex: 1000
        }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#about-me"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
           MAXIME KINIFFO
            <Button onClick={onClick}
              component="a"
              href="#skills"
              color="inherit"
              sx={{
                ml: 2,
                textDecoration: 'none',
              }}
            >
              Skills
            </Button>
            <Button
              component="a"
              href="#experiences"
              color="inherit"
              sx={{
                ml: 2,
                textDecoration: 'none',
              }}
            >
              Experiences
            </Button>
            <Button
              component="a"
              href="#projects"
              color="inherit"
              sx={{
                ml: 2,
                textDecoration: 'none',
              }}
            >
              Projects
            </Button>
            <Button
              component="a"
              href="#contact-me"
              color="inherit"
              sx={{
                ml: 2,
                textDecoration: 'none',
              }}
            >
              CONTACT ME
            </Button>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
