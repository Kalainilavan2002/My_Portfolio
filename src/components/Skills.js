import React from 'react';
import './styles/Skills.css';

function Skills() {
  // Define skills with their respective loading percentages
  const skills = [
    { name: 'Unity', percentage: 80 },
    { name: 'C#', percentage: 80 },
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 70 },
    { name: 'JavaScript', percentage: 50 },
    { name: 'React', percentage: 60 },
    { name: 'C++', percentage: 50 },
    { name: 'Java', percentage: 50 },
    { name: 'PHP', percentage: 50 },
    { name: 'SQL', percentage: 50 },
  ];

  return (
    <section id="skills" className="skills">
      <h2> My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="loading-frame" style={{ width: `${skill.percentage}%` }}>
              <span className="percentage">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className='mytalant'>
        <p>
          "I excel in game development, blending creativity with technical prowess<br />
          to craft immersive digital experiences <br />
          that captivate and engage players worldwide."
        </p>
      </div>
    </section>
  );
}

export default Skills;
