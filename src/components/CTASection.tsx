import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-emerald-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-max relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let Your Property Work for You — Not the Other Way Around
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Join hundreds of landlords who trust ABRI REALTORS to manage their properties 
            professionally and transparently. Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationForm
              trigger={
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 gap-2 font-semibold shadow-xl">
                  <Phone className="w-5 h-5" />
                  Free Consultation
                </Button>
              }
            />
            <Button 
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 gap-2"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Trusted by property owners across Nairobi</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-white/60 text-xs">Properties</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-white/60 text-xs">Collection Rate</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-white/60 text-xs">Years</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-white/60 text-xs">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
