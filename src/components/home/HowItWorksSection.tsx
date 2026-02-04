import { UserPlus, CalendarCog, CheckCheck, Zap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up in seconds with your email. No credit card required to get started.",
  },
  {
    icon: CalendarCog,
    step: "02",
    title: "Set Your Availability",
    description: "Define your working hours, slot duration, and breaks. Customize for each day of the week.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Automate with n8n",
    description: "Connect your workflow with n8n for automated booking confirmations and reminders.",
  },
  {
    icon: CheckCheck,
    step: "04",
    title: "Manage & Grow",
    description: "View all appointments in your dashboard, track analytics, and focus on patient care.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started in
            <span className="text-primary"> 4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From signup to your first booked appointment, we make the process seamless.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-4">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
