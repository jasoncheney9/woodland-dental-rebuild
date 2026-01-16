import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-woodland-green-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                Welcome to Woodland Dental
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Dental Care for the{" "}
                <span className="text-accent">Entire Family</span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-xl">
              At Woodland Dental in Salem, UT, we know that a healthy mouth leads to a healthier body. 
              Our friendly staff is committed to making dental visits stress-free and peaceful for every member of your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" className="gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Appointment
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Phone className="h-5 w-5" />
                801-423-0905
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated bg-primary-foreground/10 backdrop-blur">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="font-heading text-4xl">🦷</span>
                  </div>
                  <p className="text-sm">Family Dental Care</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl shadow-card flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-accent-foreground">20+</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary-foreground/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-primary-foreground">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
