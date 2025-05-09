
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <NavLink to="/" className="font-bold text-xl text-gradient">
            Ahmed.dev
          </NavLink>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/AhmEDbnd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ahmed-amine-bendjema-a624592a7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
