import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Dental Services", href: "/services" },
  { name: "No Insurance", href: "/no-insurance" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
  { name: "Smile Gallery", href: "/gallery" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <span className="font-heading text-xl font-bold text-primary-foreground">W</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-xl font-semibold text-foreground">Woodland</span>
            <span className="block text-xs text-muted-foreground tracking-wide">DENTAL</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                location.pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="lg" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">801-423-0905</span>
            <span className="xl:hidden">Call</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium transition-colors rounded-lg",
                  location.pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="lg" className="mt-4 gap-2">
              <Phone className="h-4 w-4" />
              801-423-0905
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
