import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NoInsurancePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container">
          <h1 className="font-heading text-4xl font-semibold text-foreground mb-4">No Insurance</h1>
          <p className="text-muted-foreground">Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoInsurancePage;
