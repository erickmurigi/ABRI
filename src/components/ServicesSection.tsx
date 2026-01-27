import { 
  Wallet, 
  Users, 
  Wrench, 
  FileText, 
  RefreshCw, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Wallet,
    title: "Rent Collection & Tenant Management",
    description: "Timely rent collection with professional follow-ups. We ensure you receive your rental income on time, every month."
  },
  {
    icon: Users,
    title: "Tenant Sourcing & Leasing",
    description: "Thorough tenant screening and background checks to find reliable, long-term tenants for your property."
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "Quick response to maintenance requests with vetted contractors. We keep your property in top condition."
  },
  {
    icon: FileText,
    title: "Monthly Financial Reporting",
    description: "Detailed monthly statements showing income, expenses, and property performance at a glance."
  },
  {
    icon: RefreshCw,
    title: "Lease Renewals & Inspections",
    description: "Proactive lease management and regular property inspections to protect your investment."
  },
  {
    icon: Zap,
    title: "Utility Tracking",
    description: "Complete utility management including meter readings, billing, and timely payments."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title mx-auto">
            Complete Property Management Solutions
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to maximize your rental income while we handle the day-to-day operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-premium group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-box mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
