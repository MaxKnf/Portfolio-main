import './App.css';
import React from 'react';
import ResponsiveAppBar from './component/navbar';
import AboutMe from './component/About_Me';
import Skills from './component/Skills';
import Experiences from './component/Experiences';
import ParticlesComponent from './component/particles';
import Projects from './component/Projects';
import MyAvatar from './component/MyAvatar';

function App() {
  return (
    <div className='home' 
      style={
        {
          margin: 0,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          zIndex: 0
        }
      }>
      <ResponsiveAppBar />
      <MyAvatar />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <ParticlesComponent id="particles"/>
    </div>
  );
}

export default App;
