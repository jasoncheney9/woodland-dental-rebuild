import { Shield, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Preventative Care",
    description: "Regular check-ups and cleanings to maintain your oral health and prevent issues before they start.",
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    description: "When problems arise, we're here to help restore your smile with gentle, effective treatments.",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Dentistry",
    description: "Enhance your smile's appearance with our range of cosmetic dental services.",
  },
];

export function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Your Comfort is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Woodland Dental provides dental care for every member of your family. 
            You will find our office comfortable and inviting, and our friendly staff 
            is committed to making dental visits stress-free and peaceful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
