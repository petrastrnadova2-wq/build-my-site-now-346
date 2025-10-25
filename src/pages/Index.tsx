import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import balanceImage from "@/assets/balance-wellness.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Petra Strnadová
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
            <h2 className="text-2xl md:text-4xl text-primary font-light">
              Poradna - Kineziologie One Brain
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Profesionální podpora pro vaši duševní a fyzickou rovnováhu prostřednictvím kineziologie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Objednat konzultaci
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8"
              >
                Více informací
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Co je kineziologie?
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kineziologie One Brain je šetrná a efektivní metoda, která propojuje tělo, mysl a emoce. 
                Pomáhá identifikovat a řešit zdroje stresu, emočních bloků a fyzických obtíží.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                S individuálním přístupem a respektem k vašim potřebám vás provázím cestou k hlubšímu 
                porozumění sobě sama a k celkové harmonii.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={balanceImage} 
                alt="Balance and wellness" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              S čím vám mohu pomoci
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Stres a úzkost
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uvolnění napětí, práce s emočními bloky a hledání vnitřního klidu v náročných situacích.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Vztahy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zlepšení komunikace, řešení konfliktů a hledání hlubšího porozumění v partnerských i rodinných vztazích.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Osobní růst
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podpora při hledání životní cesty, zvýšení sebevědomí a dosažení osobních cílů.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proč zvolit kineziologii?
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-foreground">Individuální přístup</h3>
              <p className="text-muted-foreground">Každý klient je jedinečný a zaslouží si individuální péči přizpůsobenou jeho potřebám.</p>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-foreground">Šetrná metoda</h3>
              <p className="text-muted-foreground">Neinvazivní přístup respektující přirozené tempo a hranice každého člověka.</p>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-foreground">Komplexní pohled</h3>
              <p className="text-muted-foreground">Propojení tělesné, emoční a mentální úrovně pro dosažení celkové harmonie.</p>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-foreground">Dlouhodobé výsledky</h3>
              <p className="text-muted-foreground">Zaměření na kořeny problémů, nikoli pouze na symptomy, pro trvalé zlepšení.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kontaktujte mě
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ráda odpovím na vaše dotazy a pomohu vám najít cestu k vaší vnitřní rovnováze
            </p>
          </div>

          <Card className="border-none shadow-soft bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                    <p className="text-muted-foreground">+420 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">petra@kineziologie-onebrain.cz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Adresa</h3>
                    <p className="text-muted-foreground">Poradna Kineziologie One Brain<br />Praha, Česká republika</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-border text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow text-lg px-12"
                >
                  Objednat konzultaci
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Petra Strnadová
          </h3>
          <p className="text-muted-foreground mb-4">
            Poradna - Kineziologie One Brain
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Všechna práva vyhrazena
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
