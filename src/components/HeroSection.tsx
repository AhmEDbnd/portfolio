
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              Hi, I'm <span className="text-gradient">Ahmed</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-muted-foreground ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              A Wonderful journey in development.
            </p>
            
            <p 
              className={`text-lg text-muted-foreground max-w-lg ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              Full-stack software engineer with expertise in both front-end and back-end development, 
              creating seamless and efficient web experiences.
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.7s' }}
            >
              <Button asChild>
                <Link to="/about">
                  Learn more about me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full opacity-80 blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    fill="#7C3AED" 
                    d="M36.6,-61.9C48.7,-55.3,60.8,-47.5,68.4,-36.1C76.1,-24.8,79.4,-9.9,76.5,3.3C73.7,16.6,64.8,28.2,55.5,38.3C46.2,48.5,36.5,57.2,25.2,62.6C13.9,67.9,0.9,69.9,-12.1,68.2C-25.2,66.6,-38.4,61.3,-47.9,52.1C-57.3,42.9,-63.1,30,-68,15.7C-72.8,1.3,-76.8,-14.6,-73.2,-28.9C-69.6,-43.3,-58.5,-56.2,-45,-63.3C-31.5,-70.4,-15.8,-71.9,-1.4,-69.7C12.9,-67.5,25.9,-61.6,36.6,-61.9Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-12 h-12 rounded-full bg-purple-500/20 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-20 h-20 rounded-full bg-purple-500/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-1/4 w-8 h-8 rounded-full bg-purple-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;
