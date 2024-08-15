import React from 'react';
import './styles/Certificates.css';
import gameDevImg from './Assests/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg';
import fullStackImg from './Assests/daniel-korpai-pKRNxEguRgM-unsplash.jpg';

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-box game-development">
          <img src={gameDevImg} alt="Game Development" className="service-image" />
          <h2>Game Development Services</h2>
          <ul>
            <li>Custom Game Development(Android/ios/Windows)</li>
            <li>Game Design and Prototyping</li>
            <li>Graphics and Animation</li>
            <li>Virtual Reality (VR) Games</li>
          </ul>
        </div>
        <div className="service-box full-stack-development">
          <img src={fullStackImg} alt="Full Stack Development" className="service-image" />
          <h2>Full Stack Development Services</h2>
          <ul>
            <li>Web Application Development</li>
            <li>Backend Development</li>
            <li>Frontend Development</li>
            
          </ul>
        </div>
      </div>
      <div className='mytalant'>
        <p>
          Crafting immersive game experiences and scalable web solutions, we specialize in game development, VR simulations, and full stack web applications. Our team excels in innovative design, robust backend systems, and responsive frontend interfaces. From concept to execution, we deliver tailored solutions that engage users and drive business growth with cutting-edge technologies.
        </p>
      </div>
    </section>
  );
}

export default Certificates;
