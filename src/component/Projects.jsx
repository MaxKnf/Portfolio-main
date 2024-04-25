import * as React from 'react';
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
    "Javascript, React.js",
    { 
        github:"https://github.com/MaxKnf/EsoTales-ReactJS-NodesJS---Bis/tree/master/client",  
        website: null
    } , 
    <GitHubIcon />, 
    null 
    ),
    createData(
    'POKEDEX', 
    "pokedex statique - appel d'API pour les données - REFONTE REACT/MATERIALUI à venir", 
    "Html/Css/javascript",
    { 
        github:"https://github.com/MaxKnf/Pokedex",  
        website: "https://pokedex-from-efil.netlify.app/"
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
    <ThemeProvider theme={theme}>
    <div style={{ width: '90%',marginTop: "80px", display:"flex", flexDirection:"column", alignItems: "center", color:"white"}}>
        <h2  style={{margin: "100px 0", fontFamily:"monospace", fontSize:"3rem"}}>&#123; Projets &#125;</h2>
        <a href="https://github.com/MaxKnf?tab=repositories"><GitHubIcon sx={{width:"100px", height:"100px", backgroundColor: "#212121", borderRadius:"100px" }}/></a>
        <TableContainer className='w3-animate-zoom' component={Paper} sx={{marginTop: "50px", border:"",borderRadius: "10px"}}>
        <Table sx={{ width: "100%", backgroundColor: "#212121",}} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell sx={{ color:"white" }}><strong>NOM</strong></TableCell>
                <TableCell sx={{ color:"white" }} >DESCRIPTION</TableCell>
                <TableCell sx={{ color:"white" }} >LANGUAGE</TableCell>
                <TableCell sx={{ color:"white" }} >LIEN</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.nom}
                sx={{  border: 0}}
                >
                <TableCell component="th" scope="row" sx={{ color:"white"}}>
                    {row.nom}
                </TableCell>
                <TableCell sx={{ color:"white" }} >{row.description}</TableCell>
                <TableCell sx={{ color:"white" }} >{row.language}</TableCell>
                <TableCell sx={{ color:"white" }} ><a href={row.link.github} target="_blank">{row.githubIcon}</a> <a href={row.link.website} target="_blank">{row.websiteIcon}</a></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </ThemeProvider>
  );
}
