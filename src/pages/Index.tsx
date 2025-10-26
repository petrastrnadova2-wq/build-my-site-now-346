import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import balanceImage from "@/assets/balance-wellness.jpg";
import petraProfile from "@/assets/petra-profile.jpg";

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
              Mgr. Petra Strnadová
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
            <h2 className="text-2xl md:text-4xl text-primary font-light">
              terapeutická poradka - Kineziologie One Brain
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

      {/* About Me Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 md:order-1">
              <img 
                src={petraProfile} 
                alt="Petra Strnadová" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
            <div className="space-y-6 animate-fade-up order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                O mně
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jmenuji se Petra Strnadová a provázím lidi na jejich cestě k sobě samým – skrze terapeutickou metodu Kineziologie One Brain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                S pokorou a respektem vás doprovodím tam, kde je ukrytá vaše vnitřní pravda. Věřím, že právě v hloubce vlastní duše leží vše podstatné – klid, síla i odpovědi, které možná zatím jen tiše čekají, až je uslyšíte.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Také já jsem se vydala na cestu vědomého vnitřního poznávání. A nebyla jsem na ní sama – mými největšími průvodkyněmi se staly mé dvě dcery. Díky nim jsem zakusila, jak proměňující a hluboká může být práce na sobě. Naučila jsem se opouštět staré vzorce, které mi už nesloužily – a teprve tehdy jsem pocítila sílu přítomného okamžiku – a lásky, která prostě je. Bez podmínek. Bez očekávání.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Každý z nás v sobě nese jedinečný příběh. Někdy bolavý, jindy zahalený tichem – ale vždy plný možností proměny. Jsem tu, abych vám pomohla naslouchat tomu příběhu. S laskavostí, v bezpečí a bez posuzování.
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
                dlouhodobém stresu, napětí a vnitřním neklidu
              </p>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                úzkostech, strachu, nejistotě či nízkém sebevědomí
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
                emočně náročných situacích (rozchody, ztráty, změny)
              </p>
            </div>

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
                zpracování traumatických nebo silně emočně nabitých zážitků
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
                u dětí – potíže se školou, strachy, nočními můrami, separační úzkostí, problémy ve vztazích s rodiči nebo vrstevníky
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
                    <p className="text-muted-foreground">petra@kineziologie-onebrain.cz</p>
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Mgr. Petra Strnadová
          </h3>
          <p className="text-muted-foreground mb-4">
            terapeutická poradka - Kineziologie One Brain
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
