import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainInfo from './components/MainInfo';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css'; 

function App() {
  return (
    <div className="App">
    <Navbar />
      <MainInfo />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
   
  );
}

export default App;
