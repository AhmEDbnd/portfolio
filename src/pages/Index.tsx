
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm passionate about creating efficient, scalable, and user-friendly web applications.
              With expertise in both front-end and back-end technologies, I bring ideas to life through code.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn more about me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
