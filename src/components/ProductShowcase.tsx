import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Scan, Zap, Shield, ArrowRight } from "lucide-react";
import ivyFayLogos from "@/assets/ivy-fay-logos.png";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Ivy & Fay Logos */}
          <div className="mb-8">
            <img 
              src={ivyFayLogos} 
              alt="Ivy & Fay Logos" 
              className="h-32 mx-auto"
            />
          </div>
          
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Unsere Technologie
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ivy & Fay
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zwei KI-Systeme, die gemeinsam den Einzelhandel revolutionieren
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ivy Card */}
          <Card className="border-forest-green/30 hover:shadow-xl transition-all duration-500 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-r from-forest-green to-deep-forest rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-12 w-12 text-soft-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-forest-green to-deep-forest bg-clip-text text-transparent">
                IVY
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Intelligente Produkterkennung
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Scan className="h-5 w-5 text-forest-green" />
                  <span>Automatische Produkterkennung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-forest-green" />
                  <span>Sekundenschnelle Verarbeitung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-forest-green" />
                  <span>99,9% Erkennungsgenauigkeit</span>
                </div>
              </div>
              
              <div className="bg-forest-green/5 p-4 rounded-lg border border-forest-green/20">
                <h4 className="font-semibold mb-2">Wie es funktioniert:</h4>
                <p className="text-sm text-muted-foreground">
                  Ivy erkennt Produkte automatisch durch Computer Vision und maschinelles Lernen. 
                  Keine Barcodes oder manuelle Eingaben mehr erforderlich.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fay Card */}
          <Card className="border-gold-accent/30 hover:shadow-xl transition-all duration-500 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-r from-gold-accent to-gold-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-deep-forest" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gold-accent to-gold-dark bg-clip-text text-transparent">
                FAY
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Sichere Gesichtserkennung für Zahlungen
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-gold-dark" />
                  <span>Biometrische Authentifizierung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-gold-dark" />
                  <span>Kontaktlose Bezahlung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-gold-dark" />
                  <span>DSGVO-konforme Sicherheit</span>
                </div>
              </div>
              
              <div className="bg-gold-accent/5 p-4 rounded-lg border border-gold-accent/20">
                <h4 className="font-semibold mb-2">Wie es funktioniert:</h4>
                <p className="text-sm text-muted-foreground">
                  Fay ermöglicht sichere Zahlungen durch Gesichtserkennung. 
                  Alle Daten werden verschlüsselt und DSGVO-konform verarbeitet.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Info */}
        <div className="bg-gradient-to-r from-midnight/5 to-forest-green/5 rounded-2xl p-8 border border-gold-accent/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nahtlose Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Unsere Lösung integriert sich nahtlos in bestehende Kassensysteme und 
                leitet Zahlungen direkt an Stripe weiter. Einfache Installation, 
                sofortige Nutzung.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-forest-green/10 text-forest-green border-forest-green/20">
                  Stripe Integration
                </Badge>
                <Badge className="bg-gold-accent/10 text-gold-dark border-gold-accent/20">
                  2,5% + min. 0,10 €
                </Badge>
                <Badge className="bg-midnight/10 text-midnight border-midnight/20">
                  DSGVO-konform
                </Badge>
              </div>
              <Button variant="hero" className="w-full md:w-auto">
                Integration Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-accent mb-2">50+ Hardware</div>
              <p className="text-muted-foreground mb-4">Kompatible Geräte</p>
              <div className="text-2xl font-bold text-forest-green mb-2">{"< 2 Sek"}</div>
              <p className="text-muted-foreground">Durchschnittliche Transaktionszeit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;