import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles, Phone, Mail, MapPin, Download } from "lucide-react";
import heroChild from "@/assets/hero-child.jpg";
import balanceImage from "@/assets/balance-wellness.jpg";
import childIllustration from "@/assets/child-illustration.jpg";
import { Flyer } from "@/components/Flyer";
import { generatePDF } from "@/utils/pdfGenerator";

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
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Lehko.
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-light">
              Prostor pro vnitřní klid dětí a radostné učení.
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 md:order-1">
              <img 
                src={childIllustration} 
                alt="Ilustrace šťastného dítěte" 
                className="rounded-2xl shadow-soft w-3/4 mx-auto h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
            <div className="space-y-6 animate-fade-up order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Úvod
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Podpora dětí, které se potýkají s obtížemi v emocích, ve škole nebo v kolektivu. Ve své práci využívám jemné a respektující metody, zejména kineziologii One Brain a osvědčené přístupy podle paní Emmerlingové, které pomáhají uvolnit vnitřní bloky a stres a tím tak dopomoci ke zmírnění či odstranění nežádoucích projevů a zlepšení psychické pohody u dětí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kinesiology Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Co je Kineziologie One Brain
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kineziologie One Brain je jemná, ale účinná terapeutická metoda, která pomáhá uvolňovat emocionální bloky, stres a hluboce uložené vzorce, které si neseme z minulosti – často z dětství, vztahů nebo silných životních situací.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tyto bloky se ukládají do naší nervové soustavy a mohou ovlivňovat naše chování, myšlení, emoce i tělesné zdraví – a to často nevědomě. Metoda One Brain umožňuje tyto vzorce rozpoznat, porozumět jim a postupně je zpracovat a uvolnit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pracuje se s tzv. svalovým testem, který jemně a bezpečně vede ke zdroji problému – nikoliv jen na vědomé úrovni, ale i v hlubších vrstvách podvědomí. Cílem není „opravovat" člověka, ale pomoci mu navázat znovu spojení sám se sebou, svou vnitřní silou a rovnováhou.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kineziologie One Brain je vhodná pro děti i dospělé. Podporuje vnitřní klid, osobní růst a sebepřijetí.
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

      {/* How Can Kinesiology Help Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              S čím vám může Kineziologie pomoci
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kineziologie One Brain může být užitečná tam, kde cítíme, že něco uvnitř potřebuje změnu – ale rozum nestačí. Pomáhá například při:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                nefunkčních vztahových vzorcích (v rodině, partnerství, práci)
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                psychosomatických potížích a tělesném napětí
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                dlouhodobém stresu, napětí a vnitřním neklidu
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                zpracování traumatických nebo silně emočně nabitých zážitků
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                úzkostech, strachu, nejistotě či nízkém sebevědomí
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                emočně náročných situacích (rozchody, ztráty, změny)
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                pocitu „zaseknutí" v životě nebo v rozhodování
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                návratu k vnitřní rovnováze, intuici a vlastnímu směru
              </p>
            </div>

            <div className="md:col-span-2 flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                <strong>u dětí</strong> – potíže se školou, strachy, nočními můrami, separační úzkostí, problémy ve vztazích s rodiči nebo vrstevníky
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              Terapie probíhá v bezpečném a respektujícím prostředí. Vždy v tempu, které je pro vás (nebo vaše dítě) přirozené a podpůrné.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ceník
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Individuální sezení
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft hover:shadow-glow transition-all bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Dospělí</h3>
                  <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-4" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Délka: 90–120 minut</span>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-5xl font-bold text-primary mb-2">1 500 Kč</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-glow transition-all bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Děti</h3>
                  <div className="h-1 w-12 bg-accent rounded-full mx-auto mb-4" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Délka: 60–90 minut</span>
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-5xl font-bold text-accent mb-2">800 Kč</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    <p className="text-muted-foreground">+420 792 767 332</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">poradna@petrastrnad.cz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Adresa</h3>
                    <p className="text-muted-foreground">Na Žižkově 1080<br />Liberec, Česká republika</p>
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

      {/* Hidden Flyer for PDF Generation */}
      <div className="hidden">
        <Flyer />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Mgr. Petra Strnadová
          </h3>
          <p className="text-muted-foreground mb-4">
            Terapeutická poradna - Kineziologie One Brain
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
