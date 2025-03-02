import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './styles/Project.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pro1 from './Assests/Screenshot (33).png';
import pro2 from './Assests/Screenshot (34).png';
import pro3 from './Assests/Screenshot (37) - Copy.png';
import pro4 from './Assests/Screenshot (38).png';
import vdo1 from './Assests/realracer.mp4';
import vdo2 from './Assests/dragonrun.mp4';
import vdo3 from './Assests/tilerun.mp4';
import pro5 from './Assests/zombie.jpg';
import vdo5 from './Assests/zombie.mp4';

function Projects() {
  const [showVideo, setShowVideo] = useState(Array(5).fill(false));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectData = [
    {
      title: 'Real Racer',
      description: 'Experience the thrill of high-speed racing with our Unity-powered mobile car racing game.',
      url: 'https://drive.google.com/file/d/1lCL5qr2xq4-a7GDVmVhWfYUB0rpr0ILd/view?usp=sharing',
      image: pro1,
      video: vdo1
    },
    {
      title: 'Dragon Run',
      description: 'Immerse yourself in our Unity-powered PC endless runner game.',
      url: 'https://github.com/kalai-royal-devil/Dragon-run',
      image: pro2,
      video: vdo2
    },
    {
      title: 'Tile Runner',
      description: 'Dive into the action with our Unity-developed endless runner game for PC.',
      url: 'https://github.com/kalai-royal-devil/Tile-Run',
      image: pro3,
      video: vdo3
    },
    {
      title: 'Signup-Login Project',
      description: 'A responsive login/signup page using React and Firebase authentication.',
      url: 'https://github.com/kalai-royal-devil/projact-1111',
      filesUrl: 'https://my-demo-d9a6c.web.app/',
      image: pro4,
    },
    {
      title: 'Zombie Slayer',
      description: 'A Unity FPS zombie shooter featuring AI zombies and immersive maps.',
      url: 'https://drive.google.com/file/d/1zfuwbe94sTeB62jowypZ0F3Vtseapxvb/view?usp=sharing',
      image: pro5,
      video: vdo5
    }
  ];

  const toggleVideo = (index) => {
    setShowVideo(prev => {
      const newShowVideo = [...prev];
      newShowVideo[index] = !newShowVideo[index];
      return newShowVideo;
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%'
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {isMobile ? (
        <div className="mobile-projects">
          {projectData.map((project, index) => (
            <div key={index} className="project-slide">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-files-button">
                View Project Files
              </a>
              {project.filesUrl && (
                <a href={project.filesUrl} target="_blank" rel="noopener noreferrer" className="view-files-button">
                  View Project
                </a>
              )}
              {project.video && (
                !showVideo[index] ? (
                  <button onClick={() => toggleVideo(index)} className="show-video-button">
                    Show Demo Video
                  </button>
                ) : (
                  <div>
                    <video controls className="project-video">
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <button onClick={() => toggleVideo(index)} className="show-video-button">
                      Hide Video
                    </button>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {projectData.map((project, index) => (
            <div key={index} className="project-slide">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-files-button">
                View Project Files
              </a>
              {project.filesUrl && (
                <a href={project.filesUrl} target="_blank" rel="noopener noreferrer" className="view-files-button">
                  View Project
                </a>
              )}
              {project.video && (
                !showVideo[index] ? (
                  <button onClick={() => toggleVideo(index)} className="show-video-button">
                    Show Demo Video
                  </button>
                ) : (
                  <div>
                    <video controls className="project-video">
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <button onClick={() => toggleVideo(index)} className="show-video-button">
                      Hide Video
                    </button>
                  </div>
                )
              )}
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}

export default Projects;
