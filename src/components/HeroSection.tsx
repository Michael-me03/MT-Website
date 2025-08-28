import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-payment-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Futuristische Zahlungstechnologie" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 to-deep-forest/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <Badge className="mb-6 bg-gold-accent/20 text-gold-accent border-gold-accent/30">
          <Zap className="mr-2 h-4 w-4" />
          Revolutionäre Zahlungstechnologie
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-soft-white mb-6 leading-tight">
          Die Zukunft des
          <span className="bg-gradient-to-r from-gold-accent to-gold-dark bg-clip-text text-transparent"> Bezahlens</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-soft-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Moon Technologies revolutioniert den Einzelhandel mit KI-gestützter Produkterkennung (Ivy) 
          und Gesichtserkennung für Zahlungen (Fay). Sicher, schnell und zukunftsweisend.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Demo anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="premium" size="lg" className="text-lg px-8 py-4">
            Pricing ansehen
          </Button>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-accent mb-2">2,5%</div>
            <div className="text-soft-white/70">Transaktionsgebühr</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-accent mb-2">Min. 10¢</div>
            <div className="text-soft-white/70">Pro Zahlung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-accent mb-2">99,9%</div>
            <div className="text-soft-white/70">Erkennungsgenauigkeit</div>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold-accent/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-gold-accent/30 rounded-full animate-bounce" />
    </section>
  );
};

export default HeroSection;