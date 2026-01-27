import { ClipboardCheck, FileSignature, UserCheck, Wallet, BarChart } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Property Assessment",
    description: "We evaluate your property and discuss your goals and expectations."
  },
  {
    icon: FileSignature,
    number: "02",
    title: "Agreement Signing",
    description: "Clear, transparent terms with no hidden fees or surprises."
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Tenant Placement",
    description: "We find and screen qualified tenants for your property."
  },
  {
    icon: Wallet,
    number: "04",
    title: "Rent Collection",
    description: "Timely, professional rent collection every month."
  },
  {
    icon: BarChart,
    number: "05",
    title: "Monthly Reporting",
    description: "Detailed reports on income, expenses, and property status."
  }
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="section-title mx-auto">
            Simple 5-Step Process
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Getting started with ABRI REALTORS is easy. Here's how we work together to manage your property.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-premium text-center relative z-10 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="icon-box mx-auto mt-4 mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-bold text-secondary mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
