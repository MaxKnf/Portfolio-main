import React, { useState, useEffect, useRef } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';



export default function Experiences() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

  return ( 
    <div  className='formations-experiences' style={{width:"100%",marginTop:"50px", display:"flex", flexDirection:"row", alignItems: "flex-start", justifyContent:"space-evenly" ,color: "white"}}>
      <Timeline ref={ref}  className='formations'  position="alternate" sx={{maxWidth:"45%", alignItems: "center"}}>
        <h2  style={{margin: "70px 0", fontFamily:"monospace", fontSize:"3rem"}}>&#123; Formations &#125;</h2>
        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Septembre 2023 à décembre 2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Bachelor 3 Développement Web </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; My Digital School Nantes</h5>
              <div>Application web</div>
              <div>Développement SQL</div>
              <div>Développement API</div>
              <div>Gestion de projet</div>
              <div>Conception logicielle</div>               
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Février 2023 à août 2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Développeur Web Full Stack </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; 3WAcademy</h5>
              <div>Développement Front-End</div>
              <div>Développement Back-End</div>
              <div>Gestion de projet</div>               
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Septembre 2017 à 2018</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Licence 1 MIP </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; Université de Nantes</h5>
              <div>Mathématique</div>
              <div>Physique</div>
              <div>Informatique</div>              
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Septembre 2015 à juin 2016</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; DAEU B : Equivalence bac Scientifique</h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; Université de Nantes</h5>
              <div>Mathematiques</div>
              <div>Physique</div>
              <div>Informatique</div>               
        </TimelineContent>
        </TimelineItem>
        
    </Timeline>
    


    <div className='divider' style={{width:"2px", height:"750px", marginTop: "250px",backgroundColor: "white"}}></div>



    <Timeline className='experiences'  position="alternate" sx={{maxWidth:"45%", alignItems: "center"}}>
        <h2  style={{margin: "70px 0", fontFamily:"monospace", fontSize:"3rem"}}>&#123; Experiences &#125;</h2>
        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Depuis août 2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Projets personnels </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; Applications web</h5>
              <div>Technos et outils :</div>
              <div>React.js, MaterialUi, Node.js, MySQL, MongoDB, VScode, phpMyAdmin, Midjourney, GitHub</div>               
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Juin 2023 à juillet 2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784;Projet de fin de Formation : Esotales</h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; My Digital School Nantes</h5>
              <div><strong>Blog sur le mmorpg The Elder Scrolls online</strong></div>
              <div><strong>front-end</strong> : javascript, html/css</div>
              <div><strong>back-end</strong> : node.js, express.js, ejs</div>        
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Juillet 2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Stage Développement Web </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; Ascad44 </h5>
              <div>Travaux de developpement pour le site vitrine</div>
              <div>html, css, javascript</div>               
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "100%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px", color: "white"}}>Janvier 2018 à 2021</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace", borderRadius: 5}}>
            <h4 style={{margin:"0px", fontFamily:"inherit"}}>&#10784; Employé polyvalent </h4>
            <h5 style={{fontFamily:"inherit"}}>&#8883; E.Leclerc Atlantis Drive</h5>           
        </TimelineContent>
        </TimelineItem>
    </Timeline>
    
</div>  
    
  );
}

