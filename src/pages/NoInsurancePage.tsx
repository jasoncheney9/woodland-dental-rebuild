import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, DollarSign, Users, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "No need for preauthorization",
  "No waiting periods",
  "No exclusions for pre-existing conditions",
  "No deductible",
  "No age limit",
];

const NoInsurancePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-woodland-green-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                Affordable Dental Care
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold">
                No Insurance Solution
              </h1>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                Quality dental care shouldn't be out of reach. Our Woodland Dental Plan 
                makes it easy and affordable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Dental Plan Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Plan Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                    The Woodland Dental Plan
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    For patients with no insurance coverage, our in-house plan provides 
                    comprehensive preventative care at an unbeatable value.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  <p className="font-medium text-foreground">
                    With the Woodland Dental Plan there is:
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    <Phone className="h-5 w-5" />
                    Contact Us Today
                  </Link>
                </Button>
              </div>

              {/* Price Card */}
              <div className="relative">
                <div className="bg-card rounded-3xl shadow-elevated p-8 lg:p-12 border border-border">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Annual Membership
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl lg:text-6xl font-heading font-bold text-primary">$195</span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6 space-y-4">
                      <p className="font-medium text-foreground">Plan Includes:</p>
                      <ul className="space-y-3 text-left">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Two preventative appointments</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Professional cleaning</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Comprehensive exam</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">X-rays as needed</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Fluoride treatment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">20% discount on all other treatments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 inset-4 bg-primary/5 rounded-3xl transform rotate-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Already Have Insurance Section */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                  Already Have Dental Insurance?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Even if you're covered by an existing dental plan, joining our 
                  Discount Plan may offer extra advantages.
                </p>
              </div>

              {/* Kelly's Story Card */}
              <div className="bg-background rounded-3xl shadow-card p-8 lg:p-12 border border-border">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading text-2xl font-bold text-primary">K</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">Meet Kelly</h3>
                      <p className="text-muted-foreground">A Real-World Example</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Kelly has dental insurance through her employer. She typically receives 
                      two cleanings and X-rays annually, for which Woodland Dental was reimbursed 
                      approximately <span className="font-medium text-foreground">$125 per visit</span>. 
                      However, fluoride treatments weren't covered—Kelly paid 
                      <span className="font-medium text-foreground"> $17 out-of-pocket</span> each cleaning.
                    </p>
                    <p>
                      After enrolling in our Discount Plan, Kelly paid 
                      <span className="font-medium text-foreground"> $195 for the year</span>, which 
                      included fluoride treatments—saving her that $34 across two visits. Following 
                      each appointment, she submitted the provided paperwork to her insurance provider 
                      and was reimbursed $125 per visit, totaling 
                      <span className="font-medium text-foreground"> $250 in reimbursements</span> for the year.
                    </p>
                  </div>

                  {/* Savings Breakdown */}
                  <div className="bg-primary/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">Kelly's Annual Savings</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 text-center">
                      <div className="bg-background rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Plan Cost</p>
                        <p className="font-heading text-2xl font-bold text-foreground">$195</p>
                      </div>
                      <div className="bg-background rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Insurance Reimbursement</p>
                        <p className="font-heading text-2xl font-bold text-primary">$250</p>
                      </div>
                      <div className="bg-primary rounded-xl p-4">
                        <p className="text-sm text-primary-foreground/80 mb-1">Net Savings</p>
                        <p className="font-heading text-2xl font-bold text-primary-foreground">$55+</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    For Kelly, our Discount Plan turned out to be 
                    <span className="font-medium text-foreground"> more cost-effective</span> than 
                    relying on insurance alone.
                  </p>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-12 text-center space-y-6">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  To understand your potential savings, we recommend contacting your insurance 
                  provider and asking about your <span className="font-medium text-foreground">out-of-network coverage</span>. 
                  You might be surprised at the benefits available to you!
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    <Phone className="h-5 w-5" />
                    Contact Us to Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoInsurancePage;
