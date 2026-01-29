import { 
  FileCheck, 
  Percent, 
  FileSpreadsheet, 
  MessageSquare, 
  MapPin, 
  Check 
} from 'lucide-react';

const reasons = [
  {
    icon: FileCheck,
    title: "Transparent Reporting",
    description: "Clear, detailed reports on every transaction and property activity."
  },
  {
    icon: Percent,
    title: "Flexible Fees (5%-10%)",
    description: "Competitive rates that scale with your property portfolio."
  },
  {
    icon: FileSpreadsheet,
    title: "Monthly Statements",
    description: "Comprehensive financial statements delivered every month."
  },
  {
    icon: MessageSquare,
    title: "Bulk SMS & Email Updates",
    description: "Keep tenants informed with automated communication systems."
  },
  {
    icon: MapPin,
    title: "Nairobi-Based Support",
    description: "Local team that understands the Nairobi property market."
  }
];

const WhyChooseSection = () => {
  return (
    <section id="why-abri" className="section-padding bg-card">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="section-title">
              Why do Landlords Trust ABRI REALTORS
            </h2>
            <p className="section-subtitle mt-4">
              We combine local expertise with modern technology to deliver 
              property management services that truly make a difference.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-accent border border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Guarantee</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                We're so confident in our services that we offer a satisfaction guarantee. 
                If you're not happy, we'll work with you to make it right.
              </p>
            </div>
          </div>

          {/* Right - Reasons Grid */}
          <div className="space-y-4 animate-fade-up animation-delay-200">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-background hover:bg-accent transition-colors duration-300 group"
              >
                <div className="icon-box group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">{reason.title}</h4>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
