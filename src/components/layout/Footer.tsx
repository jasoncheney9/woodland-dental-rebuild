import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground">
                <span className="font-heading text-xl font-bold text-primary">W</span>
              </div>
              <div>
                <span className="font-heading text-xl font-semibold">Woodland</span>
                <span className="block text-xs opacity-80 tracking-wide">DENTAL</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing quality dental care for every member of your family in Salem, Utah.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Dental Services</Link>
              <Link to="/no-insurance" className="text-sm opacity-80 hover:opacity-100 transition-opacity">No Insurance</Link>
              <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Smile Gallery</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>204 East 400 North</p>
                  <p>Salem, Utah 84653</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80" />
                <a href="tel:801-423-0905" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  801-423-0905
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 opacity-80" />
              <div className="text-sm opacity-80 space-y-1">
                <p>Mon - Fri: 8am - 5pm</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            ©2024 Woodland Dental • Salem, Utah
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-sm opacity-60 hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/contact" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
