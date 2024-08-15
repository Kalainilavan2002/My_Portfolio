import React, { useState } from 'react';
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

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function Projects() {
  const [showVideo, setShowVideo] = useState(Array(4).fill(false)); // Assume 4 projects

  const projectData = [
    {
      title: 'Real Racer',
      description: 'Experience the thrill of high-speed racing with our Unity-powered mobile car racing game. Customize, race, and conquer the tracks!',
      url: 'https://drive.google.com/file/d/1lCL5qr2xq4-a7GDVmVhWfYUB0rpr0ILd/view?usp=sharing',
      image: pro1,
      video: vdo1
    },
    {
      title: 'Dragon Run',
      description: 'Immerse yourself in our Unity-powered PC endless runner game. Dodge obstacles, collect power-ups, and achieve high scores in endless fun!',
      url: 'https://github.com/kalai-royal-devil/Dragon-run',
      image: pro2,
      video: vdo2
    },
    {
      title: 'Tile Runner',
      description: 'Dive into the action with our Unity-developed endless runner game for PC. Dodge obstacles, collect power-ups, and race endlessly!',
      url: 'https://github.com/kalai-royal-devil/Tile-Run',
      image: pro3,
      video: vdo3
    },
    {
      title: 'Signup-Login Project',
      description: 'I developed a responsive login/signup page using React and CSS, with Firebase authentication for secure user management.',
      url: 'https://github.com/kalai-royal-devil/projact-1111',
      filesUrl: 'https://my-demo-d9a6c.web.app/', // Added filesUrl for project 4
      image: pro4,
      // No video defined for project 4
    },
    {
      title: 'Zombie slayer',
      description: '"Create an intense zombie shooting FPS game in Unity featuring two immersive maps. Battle waves of AI zombies, survive the apocalypse, and explore dynamic environments in Zombie Slayer.',
      url: 'https://drive.google.com/file/d/1zfuwbe94sTeB62jowypZ0F3Vtseapxvb/view?usp=sharing',
      image: pro5,
      video: vdo5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const toggleVideo = (index) => {
    setShowVideo(prevShowVideo => {
      const newShowVideo = [...prevShowVideo];
      newShowVideo[index] = !newShowVideo[index]; // Toggle the clicked index
      return newShowVideo;
    });
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index} className="project-slide">
            <div className="project-content">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-files-button">
                View Project Files
              </a>
              {project.filesUrl && ( // Render View Project button if filesUrl is defined
                <a href={project.filesUrl} target="_blank" rel="noopener noreferrer" className="view-files-button imp">
                  View Project
                </a>
              )}
              {project.video && ( // Render video button only if video is defined
                !showVideo[index] ? (
                  <button onClick={() => toggleVideo(index)} className="show-video-button">
                    Show Demo Video
                  </button>
                ) : (
                  <div>
                    <video controls className="project-video">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button onClick={() => toggleVideo(index)} className="show-video-button">
                      Hide Video
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
