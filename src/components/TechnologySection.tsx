import { Monitor, BarChart3, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Real-Time Dashboards",
    description: "Access your property data anytime, anywhere"
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Monthly statements generated automatically"
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Stay updated on all property activities"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data protected with enterprise security"
  }
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powered by Smart Property Technology
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We use the <span className="text-primary font-semibold">Ezen Financials Property Management System</span> to 
              give landlords real-time dashboards, automated rent tracking, monthly statements, 
              and full transparency into their property performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Dashboard Card */}
              <div className="relative bg-card rounded-2xl shadow-2xl p-6 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-secondary">Property Dashboard</h4>
                    <p className="text-sm text-muted-foreground">January 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-accent">
                    <p className="text-2xl font-bold text-primary">KES 485K</p>
                    <p className="text-xs text-muted-foreground">Total Revenue</p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent">
                    <p className="text-2xl font-bold text-secondary">12</p>
                    <p className="text-xs text-muted-foreground">Properties</p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent">
                    <p className="text-2xl font-bold text-secondary">98%</p>
                    <p className="text-xs text-muted-foreground">Occupancy</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-accent rounded-xl flex items-end justify-around p-4">
                  {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                    <div 
                      key={i}
                      className="w-6 rounded-t-md bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-secondary mb-3">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { text: "Rent received - Unit 4A", status: "success" },
                      { text: "Maintenance completed - Unit 2B", status: "info" },
                      { text: "Lease renewal - Unit 1C", status: "warning" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'success' ? 'bg-primary' : 
                          item.status === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`} />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
