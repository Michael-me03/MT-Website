import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CreditCard, Users, Sparkles, TrendingUp, AlertTriangle } from "lucide-react";

const ProblemsAndTrends = () => {
  const problems = [
    {
      icon: Clock,
      title: "Lange Warteschlangen",
      description: "Kunden verlassen Geschäfte aufgrund langer Wartezeiten an der Kasse",
      impact: "30% Umsatzverlust"
    },
    {
      icon: CreditCard,
      title: "Bargeldlose Zahlungen",
      description: "Ohne moderne Terminals ist bargeldloses Zahlen aktuell unmöglich",
      impact: "60% der Kunden bevorzugen cashless"
    },
    {
      icon: AlertTriangle,
      title: "Schlechte UX & Diebstahlgefahr",
      description: "Mangelnde Kassenhygiene und Sicherheitsrisiken schrecken Kunden ab",
      impact: "2% Schwund durch Diebstahl"
    }
  ];

  const trends = [
    {
      icon: Sparkles,
      title: "KI-Akzeptanz steigt",
      description: "Zunehmende Akzeptanz von KI-Technologien im Alltag der Verbraucher",
      stat: "+45% in 2024"
    },
    {
      icon: TrendingUp,
      title: "Innovation & Differenzierung",
      description: "Unternehmen suchen nach neuen Wegen, sich von der Konkurrenz abzuheben",
      stat: "Top Priorität für 78% der Retailer"
    },
    {
      icon: Users,
      title: "Personalisierte Erfahrungen",
      description: "Kunden erwarten zunehmend personalisierte und nahtlose Einkaufserlebnisse",
      stat: "90% Kundenwunsch"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
            Marktanalyse
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Probleme & Trends
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Der Einzelhandel steht vor großen Herausforderungen, aber auch enormen Chancen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold text-destructive mb-8 flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6" />
              Aktuelle Probleme
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-destructive/10 p-3 rounded-lg">
                        <problem.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground mb-3">{problem.description}</p>
                        <Badge variant="destructive" className="text-xs">
                          {problem.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trends */}
          <div>
            <h3 className="text-2xl font-bold text-forest-green mb-8 flex items-center">
              <TrendingUp className="mr-3 h-6 w-6" />
              Positive Trends
            </h3>
            <div className="space-y-6">
              {trends.map((trend, index) => (
                <Card key={index} className="border-forest-green/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-forest-green/10 p-3 rounded-lg">
                        <trend.icon className="h-6 w-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{trend.title}</h4>
                        <p className="text-muted-foreground mb-3">{trend.description}</p>
                        <Badge className="text-xs bg-forest-green/10 text-forest-green border-forest-green/20">
                          {trend.stat}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Solution teaser */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-forest-green/10 to-gold-accent/10 rounded-2xl p-8 border border-gold-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Moon Technologies löst diese Herausforderungen
            </h3>
            <p className="text-muted-foreground text-lg">
              Mit Ivy und Fay bieten wir die perfekte Antwort auf alle genannten Probleme 
              und nutzen gleichzeitig die positiven Markttrends optimal aus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndTrends;