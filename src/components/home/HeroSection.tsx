import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ doctors</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simplify Your
              <br />
              <span className="opacity-90">Appointment</span>
              <br />
              <span className="opacity-80">Scheduling</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Effortlessly manage your availability, automate bookings, and focus on what matters most — your patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" variant="heroOutline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="xl" variant="heroOutline" asChild>
                <Link to="/login">View Demo</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm opacity-80">Appointments Booked</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Active Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm opacity-80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-background rounded-2xl shadow-2xl p-6 border border-border">
              {/* Mini Dashboard Preview */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Today's Schedule</div>
                      <div className="text-sm text-muted-foreground">5 appointments</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-success/10 text-success rounded-full">Active</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-accent rounded-xl">
                    <Clock className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-sm text-muted-foreground">Available Slots</div>
                  </div>
                  <div className="p-4 bg-accent rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mb-2" />
                    <div className="text-2xl font-bold text-foreground">8</div>
                    <div className="text-sm text-muted-foreground">Confirmed</div>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-xl">
                  <div className="text-sm font-medium text-foreground mb-2">Upcoming</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">John Smith</span>
                      <span className="text-foreground">9:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Sarah Johnson</span>
                      <span className="text-foreground">10:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-success text-success-foreground rounded-lg shadow-lg text-sm font-medium animate-bounce">
              +1 New Booking!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
