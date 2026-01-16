import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "The staff members of Woodland Dental are skilled and competent. They are also tuned into patient anxieties and good at easing concerns. Dr. Hansen is friendly and clearly concerned about making quality dental work happen for his patients.",
    author: "Happy Patient",
  },
  {
    text: "Wonderful experience working with Dr. Hansen again as per usual. They fit me in quickly when I was experiencing tooth pain. Thank you!",
    author: "Grateful Patient",
  },
  {
    text: "Dr. Hanson is wonderful. He was able to fit me in and take care of my tooth pain. Everyone is so friendly there!",
    author: "Satisfied Patient",
  },
  {
    text: "Woodland Dental staff and Dr Hansen are the best! Their care for their patients, attention to detail and their kindness is top notch. We love coming here.",
    author: "Loyal Patient",
  },
  {
    text: "This appointment was actually a 'do over' due to someone else's emergency. Not only did Dr. Udell call and leave a nice/apologetic voicemail – today they took me right back and had the procedure run quickly. The staff is genuine and cares.",
    author: "Impressed Patient",
  },
  {
    text: "I have been incredibly impressed by this Dental Office! My husband and I have both loved our experience here and we brought our two young daughters and I couldn't believe how gentle and fun they were with kids! Perfect place for all care, but especially pediatric care!",
    author: "Family Patient",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            What Our Patients Are Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary/10" />
                <p className="text-foreground/80 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.google.com/search?q=woodland+dental+salem+utah+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
