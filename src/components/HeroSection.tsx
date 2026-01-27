import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative container-max section-padding pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Trusted by Landlords</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
            Your Property,
            <br />
            <span className="text-gradient">Our Priority.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl animate-fade-up animation-delay-200">
            Stress-free, transparent, and system-driven property management 
            for landlords. Maximize your rental income while we handle everything <br /> DON'T OWN AND STRESS! WE GOT YOU!! .
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button className="btn-primary text-lg px-8 py-6 gap-2">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              className="btn-outline-white text-lg px-8 py-6 gap-2"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            > 
              <Play className="w-5 h-5" />
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10 animate-fade-up animation-delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-white/60 text-sm mt-1">Rent Collection Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="text-white/60 text-sm mt-1">Properties Managed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
