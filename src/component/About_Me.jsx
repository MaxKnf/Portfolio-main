import React, { useState, useEffect, useRef } from 'react'
// import myPicture from "../static/images/moi cv2.jpg"
// import Avatar from '@mui/material/Avatar';
// import { FormatAlignJustify } from '@mui/icons-material';
import devsvg from "../static/images/devsvg.svg"

function AboutMe() {

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
    <div  className='about-me' style={{
        width: "80%",
        display: "flex",
        marginTop: "100px",
        paddingBottom: "100px",
        fontFamily: 'monospace',
        flexWrap: "nowrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#212121",
        borderRadius: 10
    }}>
        {/* <Avatar
                alt="Maxime-Kiniffo"
                src={myPicture}
                sx={{ width: 350, height: 350 }}
            /> */}
        <div ref={ref} className={`${isVisible ? 'w3-animate-right' : ''}`}style={{
            width: "40%",
            display: "flex",
            flexDirection: "nowrap",
            justifyContent: "center",
            alignItems: "center",
        }}>
            
            <img src={devsvg} alt="Web developper" />
        </div>

        <div ref={ref} className={`${isVisible ? 'w3-animate-left' : ''}`} style={{
            display: "flex",
            fontFamily: 'monospace',
            color: "white",
            fontSize: "1.5rem",
            flexDirection: "column",
            width: "40%"
        }}>
            <h1 style={{fontSize: "3rem",}}> &lt; Bonjour, je m'appelle Maxime Kiniffo /&gt;</h1>
            <p>
                &#123; Étudiant pré-inscrit en troisème année de bachelor developpement à l'école Sup de Vinci de Nantes. Je suis actuellement à la recherche d'une entreprise pour effectuer mon alternance dans le domaine du web &#125;
            </p>
        </div>
       
    </div>
  )
}

export default AboutMe