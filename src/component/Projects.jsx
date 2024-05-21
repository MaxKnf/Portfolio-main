import React, { useState, useEffect, useRef } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';



function createData(nom, description, language, link, githubIcon, websiteIcon) {
  return { nom, description, language,link, githubIcon, websiteIcon};
}

/*
createData(
    'NAME', 
    "DESCRITION", 
    "LANGUAGE", 
    {
        github:"https://github.com/user/reponame",
        website: "https://website.com"
    }, 
    <GitHubIcon />, 
    <LanguageIcon />
)
*/

const rows = [
  createData(
    'Sakura Wave', 
    "Site vitrine d'un restaurant japonais", 
    "Javascript, React.js", 
    {
        github:"https://github.com/MaxKnf/sakura-wave",
        website: "https://sakura-wave-food.netlify.app/"
    }, 
    <GitHubIcon />, 
    <LanguageIcon />
    ),
    createData(
    'PORTFOLIO', 
    "mon portfolio", 
    "Javascript, React.js, MaterialUI, W3.CSS", 
    {
        github:"https://github.com/MaxKnf/Portfolio-main",
        website: null
    }, 
    <GitHubIcon />, 
    null
    ),
    createData(
    'ESOTALES-V2', 
    "V2 de mon projet de fin d'année à la 3WA (projet personnel) - fake database avec des composants react", 
    "Javascript, React.js, MaterialUI",
    { 
        github:"https://github.com/MaxKnf/Esotales_main",  
        website: "https://esotales-maxime-kiniffo.netlify.app/"
    } , 
    <GitHubIcon />, 
    <LanguageIcon />
    ),
    createData(
    'POKEDEX', 
    "pokedex (encyclopédie pokemon) avec appel API", 
    "Javascript, React.js,  W3.CSS",
    { 
        github:"https://github.com/MaxKnf/pokedex-react",  
        website: "https://pokedex-maxime-kiniffo.netlify.app/"
    } , 
    <GitHubIcon />, 
    <LanguageIcon />
    ),
    createData(
        'MERN CRUD', 
        "Apprentissage de MongoDB et création d'un crud complet", 
        "Javascript, React.js, MongoDB",
        { 
            github:"https://github.com/MaxKnf/Mern-CRUD",  
            website: null
        } , 
        <GitHubIcon />,
        null
    ),
    createData(
        'ESOTALES_V1', 
        "Projet de fin d'année pour la 3wa", 
        "Javascript, node.js, express.js, mySQL, phpmyadmin", 
        {
            github:"https://github.com/MaxKnf/Esotales_3WA_projet_final",
            website: null
        }, 
        <GitHubIcon />, 
        null
    )
];

export default function Projects() {

   

    const theme = createTheme({
        typography: {
          fontFamily: [
            'monospace',
          ].join(','),
        },
      });

  return (
    <ThemeProvider  theme={theme}>
    <div   style={{ width: '90%',marginTop: "80px 0", display:"flex", flexDirection:"column", alignItems: "center", color:"white"}}>
    <a href="#projects" aria-hidden="true" id="projects"></a>
        <h2   style={{margin: "100px 0", fontFamily:"monospace", fontSize:"3rem"}}>&#123; Projets &#125;</h2>
        <a  href="https://github.com/MaxKnf?tab=repositories" target="_blank"><GitHubIcon sx={{width:"100px", height:"100px", borderRadius:"100px" }}/></a>
        <TableContainer  component={Paper} sx={{marginTop: "50px", backgroundColor: "#212121",borderRadius: "10px"}}>
        <Table  sx={{ width: "100%", backgroundColor: "#212121",}} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell sx={{ color:"white", fontSize: "1.1rem" }} ><strong>NOM</strong></TableCell>
                <TableCell sx={{ color:"white", fontSize: "1.1rem" }} ><strong>DESCRIPTION</strong></TableCell>
                <TableCell sx={{ color:"white", fontSize: "1.1rem" }} ><strong>LANGUAGE</strong></TableCell>
                <TableCell sx={{ color:"white", fontSize: "1.1rem" }} ><strong>LIEN</strong></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.nom}
                sx={{  borderTop: "2px solid rgba(224, 224, 224, 1)", borderBottom: "1px solid rgba(33, 33, 33, 1)"}}
                >
                <TableCell component="th" scope="row" sx={{ color:"white"}}>
                    {row.nom}
                </TableCell>
                <TableCell sx={{ color:"white" }} >{row.description}</TableCell>
                <TableCell sx={{ color:"white" }} >{row.language}</TableCell>
                <TableCell sx={{ color:"white"}} ><a href={row.link.github} target="_blank">{row.githubIcon}</a> <a href={row.link.website} target="_blank">{row.websiteIcon}</a></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </ThemeProvider>
  );
}
