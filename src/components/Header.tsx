import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Produkte", href: "#products" },
    { name: "Probleme & Trends", href: "#problems" },
    { name: "Pricing", href: "#pricing" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-gold-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-accent to-gold-dark rounded-lg flex items-center justify-center">
              <span className="text-midnight font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-soft-white">
              Moon Technologies
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-soft-white/80 hover:text-gold-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-soft-white hover:text-gold-accent">
              Anmelden
            </Button>
            <Button variant="accent">
              Demo anfordern
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-soft-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-accent/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-soft-white/80 hover:text-gold-accent transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gold-accent/20">
                <Button variant="ghost" className="text-soft-white hover:text-gold-accent justify-start">
                  Anmelden
                </Button>
                <Button variant="accent" className="justify-start">
                  Demo anfordern
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;