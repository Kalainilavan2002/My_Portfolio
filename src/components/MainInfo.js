import React from 'react';
import './styles/MainInfo.css';
import img1 from './Assests/me.png';
import resume from './Assests/resume1.pdf';

function MainInfo() {
  return (
    <section id="main-info" className="main-info">
      <img src={img1} alt="Your Name" className="profile-photo" />
      <div className="details">
<h2>  Hey There,</h2>
        <h1>I`m A.A.Kalainilavan</h1>
        <h3>  -Game Developer for Unity</h3>
        <p>love for creating innovative and impactful solutions. With a strong background in Unity Development, I thrive on transforming complex challenges into elegant, user-friendly experiences. My journey in Game Development has been fueled by a relentless curiosity and a commitment to continuous learning, always striving to stay ahead of the curve in this ever-evolving industry.</p>
        <div>
        <a href={resume} className='cv' target="_blank" rel="noopener noreferrer">
        View My CV
          </a>
        </div>
      </div>
      
    </section>
    
  );
}

export default MainInfo;
