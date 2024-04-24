import React, { useState, useEffect, useRef } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Experiences() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0,
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
    <div className='formations-experiences' style={{width:"100%", display:"flex", flexDirection:"row", alignItems: "flex-start", justifyContent:"space-evenly" ,color: "white"}}>
      <Timeline className='formations'  position="alternate" sx={{maxWidth:"45%", alignItems: "center"}}>
        <h2 style={{margin: "40px 0", fontFamily:"monospace", fontSize:"3rem"}}>Formations</h2>
        <TimelineItem sx={{width: "90%" }}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px"}}>12/2023 à aujourd'hui</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent ref={ref} className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white", backgroundColor: "#212121", fontFamily:"monospace"}}>
            <h4 style={{margin:"0px"}}><ArrowForwardIosIcon /> Bachelor 3 Développeur Web</h4>
            <h5> My Digital School Nantes</h5>
            <ul>
              <li>Application web</li>
              <li>Développement SQL</li>
              <li>Développement API</li>
              <li>Gestion de projet</li>
              <li>Conception logicielle</li>
            </ul>               
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            <h4 style={{margin:"0px"}}>09/2023 à 12/2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>Développement Front-End</div>
            <div>Développement Back-End</div>
            <div>Gestion de projet</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
        <h4 style={{margin:"0px"}}>02/2023 à 08/2023</h4>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{margin: "20px 0 20px 10px", marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
    <div className='divider' style={{width:"1.5px", height:"750px", marginTop: "150px",backgroundColor: "#212121"}}></div>

    <Timeline className='experiences'  position="alternate" sx={{maxWidth:"45%", alignItems: "center"}}>
        <h2 style={{margin: "40px 0", fontFamily:"monospace", fontSize:"3rem"}}>Experiences</h2>
        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
           <h4 style={{margin:"0px"}}>12/2023 à aujourd'hui</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent ref={ref} className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            <h4 style={{margin:"0px"}}>09/2023 à 12/2023</h4> 
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
        <h4 style={{margin:"0px"}}>02/2023 à 08/2023</h4>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-left' : ''}`} sx={{marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{width: "90%"}}>
        <TimelineOppositeContent color="text.secondary">
            9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator sx={{margin: "0px 10px"}}>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`${isVisible ? 'w3-animate-right' : ''}`} sx={{margin: "20px 0 20px 10px", marginBottom:"40px", bgcolor: "white"}}>
            <h4 style={{margin:"0px"}}>title 4</h4>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>            
        </TimelineContent>
      </TimelineItem>
    </Timeline>
</div>  
    
  );
}

// opacity: 0;
//   visibility: hidden;
//   transition: opacity 0.5s ease, visibility 0.5s ease;
// , opacity: 0, visibility: "hidden", transition: "opacity 0.5s ease, visibility 0.5s ease"