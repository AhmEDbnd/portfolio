
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
const skills: Skill[] = [
    { 
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'TailwindCSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    }
  ];
 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
   return (
  <section ref={sectionRef} className="py-16 section-fade-in">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto place-items-center justify-center">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="bg-secondary rounded-lg p-6 text-center hover:scale-105 transition-transform w-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} logo`}
              className="w-16 h-16 mx-auto mb-3"
            />
            <h3 className="text-lg font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default SkillsSection;
