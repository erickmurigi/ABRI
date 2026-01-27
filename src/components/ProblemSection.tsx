import { AlertTriangle, Check } from 'lucide-react';

const problems = [
  "Tired of chasing rent every month?",
  "Struggling with unreliable agents?",
  "No clear reports or transparency?",
];

const ProblemSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="animate-fade-up">
            <h2 className="section-title mb-8">
              Does This Sound Familiar?
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-lg text-secondary font-medium pt-1.5">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="animate-fade-up animation-delay-200">
            <div className="card-premium bg-primary text-primary-foreground">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ABRI REALTORS Handles Everything
              </h3>
              <p className="text-white/80 text-lg mb-6">
                From tenant sourcing to rent collection, maintenance to reporting — 
                we manage your property professionally and transparently so you can 
                enjoy passive income without the headaches.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional rent collection",
                  "Transparent monthly reporting",
                  "24/7 tenant communication",
                  "Regular property inspections"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
