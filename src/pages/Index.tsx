import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProblemsAndTrends from "@/components/ProblemsAndTrends";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ProblemsAndTrends />
        <PricingSection />
      </main>
    </div>
  );
};

export default Index;
