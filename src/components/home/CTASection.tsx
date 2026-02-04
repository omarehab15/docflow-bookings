import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
          Ready to Streamline Your
          <br />
          Appointment Scheduling?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Join hundreds of doctors who have simplified their practice with MediBook. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
            asChild
          >
            <Link to="/signup" className="flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="xl" variant="heroOutline" asChild>
            <Link to="/login">Contact Sales</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
