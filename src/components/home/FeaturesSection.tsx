import { Calendar, Clock, Users, BarChart3, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Set your availability with just a few clicks. Define working hours, breaks, and slot durations effortlessly.",
  },
  {
    icon: Clock,
    title: "Automated Bookings",
    description: "Patients book available slots automatically. No more back-and-forth phone calls or emails.",
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Keep track of all your patients and their appointment history in one organized dashboard.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Understand your booking patterns with detailed analytics to optimize your schedule.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated reminders reduce no-shows and keep both you and patients informed.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with industry-standard security. HIPAA-compliant infrastructure.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Manage
            <br />
            <span className="text-primary">Your Practice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for healthcare professionals to streamline appointment management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
