import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-woodland-green-light p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="text-primary-foreground space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                We're here to help you and your family achieve healthy, beautiful smiles. 
                Contact us today to schedule your appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call 801-423-0905
                </Button>
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading text-xl font-semibold mb-4">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 opacity-80" />
                  <div>
                    <p className="font-medium">Woodland Dental</p>
                    <p className="opacity-80">204 East 400 North</p>
                    <p className="opacity-80">Salem, Utah 84653</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 opacity-80" />
                  <a href="tel:801-423-0905" className="opacity-80 hover:opacity-100 transition-opacity">
                    801-423-0905
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
