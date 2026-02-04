import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, ArrowLeft, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup - will be replaced with actual auth
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "Welcome to MediBook! Let's set up your practice.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div 
        className="hidden lg:flex flex-1 items-center justify-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="text-primary-foreground text-center p-12 max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
            <Calendar className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Start Your Free Trial</h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of doctors who have simplified their appointment scheduling with MediBook.
          </p>
          <div className="flex flex-col gap-4 text-left max-w-xs mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm">✓</div>
              <span className="opacity-90">Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm">✓</div>
              <span className="opacity-90">No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm">✓</div>
              <span className="opacity-90">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
            <p className="text-muted-foreground">
              Get started with MediBook and streamline your practice.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 h-12"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </p>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
