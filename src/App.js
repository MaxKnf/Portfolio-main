import './App.css';
import React from 'react';
import ResponsiveAppBar from './component/navbar';
import AboutMe from './component/About_Me';
import Skills from './component/Skills';
import Experiences from './component/Experiences';
import ParticlesComponent from './component/particles';

function App() {
  return (
    <div className='home' 
      style={
        {
          // backgroundColor: "#303030",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          zIndex: 0
        }
      }>
      <ResponsiveAppBar />
      <AboutMe />
      <Skills />
      <Experiences />
      <ParticlesComponent id="particles"/>
    </div>
  );
}

export default App;
