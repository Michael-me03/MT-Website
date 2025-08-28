import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfekt für kleine Geschäfte",
      price: "2,5%",
      priceDetail: "+ min. 0,10 € pro Transaktion",
      features: [
        "Ivy Produkterkennung",
        "Fay Gesichtszahlung", 
        "Stripe Integration",
        "Basis Support",
        "Bis zu 5 Kassensysteme",
        "Standard Hardware Support"
      ],
      popular: false,
      cta: "Jetzt starten"
    },
    {
      name: "Professional",
      description: "Ideal für mittelständische Unternehmen",
      price: "2,0%",
      priceDetail: "+ min. 0,08 € pro Transaktion",
      features: [
        "Alle Starter Features",
        "Erweiterte Analytics",
        "Multi-Store Management",
        "Priority Support",
        "Bis zu 50 Kassensysteme",
        "Premium Hardware Support",
        "Custom Branding"
      ],
      popular: true,
      cta: "Beliebte Wahl"
    },
    {
      name: "Enterprise",
      description: "Für große Handelsketten",
      price: "Individuell",
      priceDetail: "Maßgeschneiderte Konditionen",
      features: [
        "Alle Professional Features",
        "Dedizierter Account Manager",
        "White-Label Lösung",
        "24/7 Premium Support",
        "Unbegrenzte Kassensysteme",
        "Custom API Integration",
        "SLA Garantie",
        "Vor-Ort Installation"
      ],
      popular: false,
      cta: "Kontakt aufnehmen"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-accent/10 text-gold-dark border-gold-accent/20">
            <Zap className="mr-2 h-4 w-4" />
            Transparente Preise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6 animate-fade-in">
            Pricing
          </h2>
          <p className="text-xl text-midnight/70 max-w-3xl mx-auto">
            Wählen Sie das passende Paket für Ihr Unternehmen. 
            Keine versteckten Kosten, faire Konditionen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white group animate-slide-up ${
                plan.popular 
                  ? "border-gold-accent shadow-xl scale-105 ring-2 ring-gold-accent/20" 
                  : "border-midnight/20 hover:border-gold-accent/50"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-accent to-gold-dark text-deep-forest text-sm font-semibold text-center py-2">
                  <Star className="inline h-4 w-4 mr-1" />
                  Beliebteste Wahl
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <CardTitle className="text-2xl font-bold text-midnight mb-2 group-hover:text-forest-green transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <p className="text-midnight/70 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-forest-green mb-2 group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </div>
                  <div className="text-sm text-midnight/60">
                    {plan.priceDetail}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                    >
                      <Check className="h-5 w-5 text-forest-green flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-midnight/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full group-hover:scale-105 transition-transform duration-300" 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-forest-green/5 rounded-2xl p-8 border border-forest-green/20 max-w-4xl mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-midnight mb-4">
              Warum Moon Technologies?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-forest-green mb-2">Keine Setup-Kosten</div>
                <p className="text-midnight/70">Einfache Installation ohne Vorabinvestition</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-forest-green mb-2">Monatlich kündbar</div>
                <p className="text-midnight/70">Flexible Verträge ohne lange Bindung</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="font-semibold text-forest-green mb-2">30 Tage Geld-zurück</div>
                <p className="text-midnight/70">Risikofrei testen und überzeugen lassen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;