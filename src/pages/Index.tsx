import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles, Phone, Mail, MapPin, Download } from "lucide-react";
import heroChild from "@/assets/hero-child.jpg";
import balanceImage from "@/assets/balance-wellness.jpg";
import petraProfile from "@/assets/petra-profile.jpg";
import childIllustration from "@/assets/child-illustration.jpg";
import { Flyer } from "@/components/Flyer";
import { generatePDF } from "@/utils/pdfGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>
              Lehko.
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-light tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Prostor pro vnitřní klid dětí a radostné učení.
            </h2>
            <img src={heroChild} alt="Ilustrace šťastného dítěte" className="mx-auto max-w-[200px] md:max-w-[280px] h-auto mt-4 rounded-2xl" />
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Děti, které se potýkají s obtížemi v emocích, ve škole nebo v kolektivu, potřebují citlivý přístup a pochopení. Nabízím bezpečnou podporu založenou na jemných a respektujících metodách – zejména kineziologii One Brain a osvědčených postupech paní Emmerlingové.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Tyto techniky míří přímo k jádru problému: pomáhají uvolňovat vnitřní bloky a odbourávat nahromaděný stres.
            </p>
          </div>
        </div>
      </section>


      {/* What is Kinesiology Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Metody
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Kineziologie One Brain
              </h3>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jde o jemnou metodu, jak pomoci dětem odložit „neviditelný batůžek" plný stresu a obav. Někdy se v dětském světě nahromadí napětí ze školy nebo nepříjemných zážitků, které se pak projeví jako neklid, strach nebo potíže s učením. Metoda One Brain® nám pomáhá citlivě najít místo, kde se toto napětí v tělíčku schovalo, a bezpečně ho uvolnit. Dítě tak může znovu najít svou přirozenou radost, lépe se soustředit a cítit se ve svém světě v bezpečí.
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-primary pt-8">
                Metody dle paní Emmerlingové a EFT
              </h3>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tento moderní přístup umožňuje jemně uvolňovat hluboko uložený stres a raná traumata, která mohou nevědomky brzdit přirozený vývoj dítěte. Pomocí technik energetické psychologie (EFT) je možné rozpustit vnitřní bloky a strachy, a tím tak navrátit dětskému organismu ztracenou rovnováhu a pocit bezpečí. Metoda se zaměřuje na uspokojení základních citových potřeb. Výsledkem je psychická úleva a nová vnitřní síla, díky které může dítě opět s lehkostí rozvíjet svůj plný potenciál.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={childIllustration} 
                alt="Ilustrace šťastného dítěte" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Child Support Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              S čím mohu vašemu dítěti pomoci
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-xl text-primary font-semibold mb-2">Oblast podpory</p>
            <p className="text-lg text-muted-foreground">
              Konkrétní projevy, které spolu vyřešíme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Škola a učení</h3>
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Dyslexie, dysgrafie, pomalé čtení či nesoustředěnost
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Emoční svět</h3>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Nízké sebevědomí, tréma, úzkostné stavy, silné emoční projevy (vztek, agrese), noční můry, strachy, separační úzkost, kousání nehtů.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Chování a vztahy</h3>
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Potíže s adaptací v kolektivu, časté konflikty s vrstevníky či rodiči, agresivita.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Tělo a stres</h3>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Psychosomatické potíže jako například bolesti břicha, bolesti hlavy bez zjevné příčiny nebo pomočování.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground italic max-w-3xl mx-auto">
              <strong className="not-italic">Informace o poskytovaných službách:</strong> Nabízené služby (Kineziologie One Brain, metody dle Mgr. Emmerlingové a EFT) jsou poradenské a vzdělávací techniky zaměřené na uvolnění stresu a osobní rozvoj dítěte. Tyto služby nejsou zdravotními službami ve smyslu zákona č. 372/2011 Sb. o zdravotních službách, ani nenahrazují péči lékaře, klinického psychologa či psychiatra. V případě podezření na závažné onemocnění či klinickou poruchu prosím vždy konzultujte stav dítěte s příslušným odborným lékařem.
            </p>
          </div>
        </div>
      </section>

      {/* O mně Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              O mně
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start animate-fade-up">
            <div className="md:col-span-2 flex justify-center">
              <img
                src={petraProfile}
                alt="Mgr. Petra Strnadová"
                className="rounded-2xl shadow-soft w-full max-w-xs h-auto object-cover"
              />
            </div>
            <div className="md:col-span-3 space-y-5">
              <h3 className="text-2xl font-semibold text-primary">Mgr. Petra Strnadová</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jmenuji se Petra Strnadová a mým posláním je provázet děti i dospělé na cestě k vnitřnímu klidu a porozumění sobě samým. Moje profesní cesta začala na pedagogické fakultě, kde jsem získala hluboký vhled do dětského světa, jeho zákonitostí i výzev, kterým děti v dnešní době čelí.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Během let strávených prací s dětmi i v mém blízkém okolí jsem si začala uvědomovat, jak hluboce ovlivňuje schopnost učení a radostné dětství vnitřní napětí, které si v sobě dítě nese. Viděla jsem, že tam, kde slova a klasické rady nestačí, může pomoci jemná práce s emocemi a tělem. Právě tyto zkušenosti mě přivedly k terapeutické metodě Kineziologie One Brain® a přístupům paní Emmerlingové.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ve své poradně LEHKO. propojuji pedagogické vzdělání s respektujícím přístupem, který se nedívá jen na výsledek ve škole, ale především na to, jak se dítě cítí uvnitř. Pomáhám dětem odložit stres a strachy, aby mohly znovu objevit svou vnitřní sílu a začít prožívat školní povinnosti i vztahy s lehkostí.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Věřím, že v každém příběhu je ukrytý klíč k řešení. Jsem tu, abych vám i vašim dětem pomohla tento klíč najít v bezpečném prostředí, s laskavostí a bez posuzování.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Ceník služeb
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
          </div>

          <Card className="border-none shadow-soft bg-card">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-xl text-foreground font-medium">60 min</span>
                <span className="text-2xl font-bold text-primary">800 Kč</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-xl text-foreground font-medium">90 min</span>
                <span className="text-2xl font-bold text-primary">1 200 Kč</span>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            Délka setkání se odvíjí od individuálních potřeb a rozpoložení dítěte.
          </p>
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
