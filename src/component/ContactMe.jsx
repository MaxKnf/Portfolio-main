import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactMe() {
    
    
  return (
        <div style={{ width: '100%',marginTop: "50px", marginBottom: "300px", display:"flex", flexDirection:"column", alignItems: "center", color:"white"}}>
            <a href="#contact-me" aria-hidden="true" id="contact-me"></a>
            <h2 style={{margin: "70px 0", fontFamily:"monospace", fontSize:"3rem"}}>&#123; Contactez moi &#125;</h2>
            <div style={{width: '100%',marginTop: "80px", display:"flex", flexDirection: "row", justifyContent:"space-evenly"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h3 style={{ fontFamily:"monospace"}}>Par Email</h3>
                    <a href="mailto:maxime.kiniffo44@gmail.com"><EmailIcon sx={{width:"100px", height:"100px", borderRadius:"100px" }}/></a>     
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h3>Via Linkedin</h3>
                    <a href="https://www.linkedin.com/in/maxime-kiniffo-b56520272/"><LinkedInIcon sx={{width:"100px", height:"100px", borderRadius:"100px" }}/></a>
                </div>        
            </div>
        </div>
  )
}

export default ContactMe