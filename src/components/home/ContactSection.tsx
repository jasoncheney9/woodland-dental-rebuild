import { MapPin, Mail, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "8am – 5pm" },
  { day: "Tuesday", time: "8am – 7pm" },
  { day: "Wednesday", time: "8am – 5pm" },
  { day: "Thursday", time: "8am – 6pm" },
  { day: "Friday", time: "8am – 3pm" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Office Location
                  </h3>
                  <p className="text-muted-foreground">Woodland Dental</p>
                  <p className="text-muted-foreground">204 East 400 North</p>
                  <p className="text-muted-foreground">Salem, Utah 84653</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Email Address
                  </h3>
                  <a 
                    href="mailto:info@woodlanddentalpractice.com" 
                    className="text-primary hover:underline"
                  >
                    info@woodlanddentalpractice.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Phone Number
                  </h3>
                  <a 
                    href="tel:801-423-0905" 
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    (801) 423-0905
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.time}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-border mt-2">
                      <span className="text-muted-foreground">Saturday - Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] lg:min-h-0">
            <div className="bg-background rounded-2xl shadow-soft overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7892893843!2d-111.67461!3d40.05304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d8a1b8e8b8b8b%3A0x1234567890abcdef!2s204%20E%20400%20N%2C%20Salem%2C%20UT%2084653!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Woodland Dental Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
