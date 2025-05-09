
import React, { useEffect, useRef } from 'react';
import SkillsSection from '@/components/SkillsSection';

const About: React.FC = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  
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
    
    const bioSection = bioRef.current;
    const careerSection = careerRef.current;
    
    if (bioSection) observer.observe(bioSection);
    if (careerSection) observer.observe(careerSection);
    
    return () => {
      if (bioSection) observer.unobserve(bioSection);
      if (careerSection) observer.unobserve(careerSection);
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer focused on creating exceptional web experiences
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div ref={bioRef} className="md:col-span-2 section-fade-in">
            <div className="bg-secondary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm Ahmed, a full-stack software engineer passionate about building web applications 
                  that are not only functional but also provide exceptional user experiences.
                </p>
                <p>
                  I enjoy working across the entire technology stack and take pride in writing clean, 
                  maintainable code that solves real-world problems. My approach to development is 
                  methodical and focused, with a keen eye for detail and performance optimization.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or expanding my knowledge through continuous learning and professional development.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-secondary/30 rounded-lg p-8 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">📧</div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">contact@ahmed.dev</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">📍</div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Earth, Solar System</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💼</div>
                  <div>
                    <h3 className="font-medium">Employment</h3>
                    <p className="text-sm text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={careerRef} className="mb-16 section-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="mb-1 text-sm text-purple-400">2023 - Present</div>
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
                <p className="text-muted-foreground">
                  Building responsive web applications with modern technologies like React, 
                  Node.js, and various databases. Implementing best practices and focusing 
                  on performance optimization and clean code.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="mb-1 text-sm text-purple-400">2021 - 2023</div>
                <h3 className="text-xl font-bold">Front-End Developer</h3>
                <p className="text-muted-foreground">
                  Specialized in creating responsive and accessible user interfaces using HTML, 
                  CSS, and JavaScript. Collaborated with design teams to implement pixel-perfect designs.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="mb-1 text-sm text-purple-400">2019 - 2021</div>
                <h3 className="text-xl font-bold">Computer Science Student</h3>
                <p className="text-muted-foreground">
                  Studied computer science fundamentals, algorithms, data structures, and software engineering principles.
                  Completed various projects and gained a strong foundation in programming concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
