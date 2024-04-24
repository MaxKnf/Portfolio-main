import React, { useState, useEffect, useRef } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import backend from "../static/images/backend.png"
import frontend from "../static/images/frontend.png"
import { FrontEndSkillsList, BackEndSkillsList } from './SkillsList';


function Skills() {
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
      <div className={`skills `} ref={ref} style={{ display: "flex" ,width: "100%", flexDirection: "column", margin: "40px 0px"}}>
        <a href="#skills" aria-hidden="true" id="skills"></a>
        <h2  style={{width: "100%", display: "flex" ,justifyContent: "center", fontFamily:"monospace", fontSize:"3rem", margin: "75px 0px"}}>
          
          SKILLS
        </h2>
        <div style={{width: "100%", display: "flex", flexDirection:"row", justifyContent: "space-evenly", flexWrap:"nowrap"}}>
          <Card className={`w3-center ${isVisible ? 'w3-animate-left' : ''}`} sx={{ maxWidth: 600, maxHeight: 1000, backgroundColor: '#212121' }}>
            <CardActionArea sx={{display:'flex', flexDirection: 'column'}}>
              <h3 style={{ fontFamily:"monospace" }}>FrontEnd</h3>
              <CardMedia sx={{width: "50%"}}
                component="img"
                width="100%"
                image={frontend}
                alt="FrontEnd"
              />
              <CardContent sx={{display: "flex", justifyContent: "center", width: "100%"}}>
                <FrontEndSkillsList />
              </CardContent>
            </CardActionArea>
          </Card>
  
          <Card className={`w3-center ${isVisible ? 'w3-animate-right' : ''}`} sx={{ maxWidth: 600, maxHeight: 1000, backgroundColor: '#212121' }}>
            <CardActionArea sx={{display:'flex', flexDirection: 'column'}}>
              <h3 style={{ fontFamily:"monospace" }}>BackEnd</h3>
              <CardMedia sx={{width: "50%"}}
                component="img"
                height="100%"
                image={backend}
                alt="BackEnd"
              />
              <CardContent sx={{display: "flex", justifyContent: "center", width: "100%"}}>
              <BackEndSkillsList />   
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
  
  export default Skills;




  // function Skills() {
//   return (
//     <div className='skills w3-center w3-animate-bottom'>
//         <h2>SKILLS</h2>
//         <div  style={{display: "flex"}}>
//         <Card sx={{ maxWidth: 600, maxHeight: 1000, backgroundColor: '#212121' }}>
//             <CardActionArea>
//                 <h3>FrontEnd</h3>
//                 <CardMedia
//                 component="img"
//                 height="512"
//                 image={frontend}
//                 alt="green iguana"
//                 />
//                 <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
                    
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>

//         <Card sx={{ maxWidth: 600, maxHeight: 1000, backgroundColor: '#212121'}}>
//             <CardActionArea>
//                 <h3>BackEnd</h3>
//                 <CardMedia
//                 component="img"
//                 height="512"
//                 image={backend}
//                 alt="green iguana"
//                 />
//                 <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
                    
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//         </div>
        
//     </div>
//   )
// }

// export default Skills