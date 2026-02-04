import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">MediBook</span>
            </Link>
            <p className="text-background/70 max-w-md">
              Simplifying appointment scheduling for healthcare professionals. 
              Focus on your patients while we handle the bookings.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-background/70">
              <li><Link to="/#features" className="hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-background transition-colors">How It Works</Link></li>
              <li><Link to="/signup" className="hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-background/70">
              <li><Link to="/" className="hover:text-background transition-colors">Help Center</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} MediBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
