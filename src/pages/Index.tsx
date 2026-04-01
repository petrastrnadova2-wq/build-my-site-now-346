import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles, Phone, Mail, MapPin, Download } from "lucide-react";
import heroChild from "@/assets/hero-child.jpg";
import balanceImage from "@/assets/balance-wellness.jpg";
import petraProfile from "@/assets/petra-profile.jpg";
import childIllustration from "@/assets/child-illustration.jpg";
import contactIllustration from "@/assets/contact-illustration.png";
import familyIllustration from "@/assets/family-illustration.jpg";
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
            <h1 className="text-7xl md:text-9xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Lehko.
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-light tracking-wide">
              Poradna pro lehkost v emocích, vztazích a učení.
            </h2>
            <img src={heroChild} alt="Ilustrace šťastného dítěte" className="mx-auto max-w-xs md:max-w-md h-auto mt-4" />
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Pomáhám dětem i dospívajícím zvládat emoce, školní nároky i vztahy. Nabízím bezpečný prostor pro řešení potíží úzkostí i psychosomatikou – citlivě a bez tlaku.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-primary italic max-w-2xl mx-auto mt-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              „Aby v životě bylo zase LEHKO."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-soft hover:shadow-glow text-lg px-8"
                onClick={() => document.getElementById('oblasti-podpory')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Chci pomoci svému dítěti
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                onClick={() => document.getElementById('podpora-dospelych')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Potřebuji podporu pro sebe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Child Support Section */}
      <section id="oblasti-podpory" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              S čím vám mohu pomoci
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-xl text-primary font-semibold mb-2">Oblast podpory</p>
            <p className="text-lg text-muted-foreground">
              Oblasti, ve kterých mohu vaše dítě provázet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Škola a učení</h3>
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Dyslexie, dysgrafie, pomalé čtení či nesoustředěnost, problémy s chováním, selhávání při zkouškách (i když učivo doma umíme)...
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Emoční svět</h3>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Nízké sebevědomí, tréma, úzkostné stavy, pocity viny, silné emoční projevy (vztek, agrese), traumatické stavy, noční můry, strachy, separační úzkost, kousání nehtů, závislosti, fobie...
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Chování a vztahy</h3>
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Potíže s adaptací v kolektivu, problémy v komunikaci a ve vztazích, časté konflikty s vrstevníky či rodiči, agresivita...
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-card">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Tělo a stres</h3>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Psychomotorický neklid, zmírnění psychosomatických potíží jako například bolesti břicha, bolesti hlavy bez zjevné příčiny, chronické zdravotní problémy, nebo problémy s vyprazdňováním (pomočování, zácpa).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Podpora dospělých Section */}
      <section id="podpora-dospelych" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Podpora dospělých
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-xl text-primary font-semibold mb-4">Princip spojených nádob</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Často je tomu tak, že když se uvolní napětí v rodině nebo u rodiče, dětské symptomy mizí. Proto nabízím konzultace i pro vás, abychom podpořili celkovou lehkost u vás doma.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={familyIllustration} 
              alt="Ilustrace rodiny" 
              className="max-w-sm md:max-w-md h-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </section>

      {/* Cesta k LEHKOSTI Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Jak probíhá naše cesta k LEHKOSTI?
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Moje práce je založena na důvěře, efektivitě a hledání skutečných příčin. Nečekejte u mě dlouhé dotazníky, jdeme přímo k jádru věci.
            </p>
          </div>

          <div className="space-y-10 max-w-3xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-primary">1. První kontakt a rezervace termínu</h3>
              <div className="h-1 w-12 bg-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                Cesta začíná vaším zavoláním. Krátce mi popíšete, co vás nebo vaše dítě trápí, a společně vybereme nejbližší volný termín. Tento první kontakt mi pomůže udělat si základní obraz o souvislostech, které budeme v poradně řešit.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-primary">2. Setkání: Společně nebo skrze vás</h3>
              <div className="h-1 w-12 bg-accent rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                Každá rodina je jedinečná a já ctím její aktuální potřeby. Máme dvě cesty:
              </p>
              <div className="pl-4 border-l-2 border-primary/30 space-y-4 mt-4">
                <div>
                  <p className="font-semibold text-foreground">Práce s dítětem:</p>
                  <p className="text-muted-foreground leading-relaxed">Jemné uvolnění stresu a odblokování příčiny potíží přímo u dítěte v bezpečném prostředí poradny.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Práce přes prostředníka (Rodiče):</p>
                  <p className="text-muted-foreground leading-relaxed">Pokud je dítě příliš malé, citlivé nebo situace vyžaduje jiný přístup, můžeme pracovat přímo s vámi (rodičem). Díky principu spojených nádob se uvolnění napětí u vás přenese i na vaše dítě. Je to velmi hluboká a efektivní cesta, která šetří stres dítěti i čas vám.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-primary">3. Cesta k úlevě</h3>
              <div className="h-1 w-12 bg-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                Cílem není nekonečná terapie, ale nalezení klíče, který odemkne vnitřní blok. Kineziologie je v tomto velmi přímá – často stačí i jedno setkání, aby se v celém rodinném celku začaly dít změny a v životě bylo zase LEHKO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
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
                Jmenuji se Petra Strnadová a mým posláním je provázet děti i dospělé na cestě k vnitřnímu klidu a porozumění sobě samým. Moje profesní cesta začala na pedagogické fakultě, kde jsem získala hluboký vhled do zákonitostí dětského světa i náročných výzev, kterým děti v dnešní době čelí.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Právě skrze své vzdělání a pozorování souvislostí v mém okolí jsem si uvědomila, jak zásadně ovlivňuje vnitřní napětí schopnost dětí učit se i prožívat spokojené dětství. Pochopila jsem, že rodina funguje jako jeden propojený, živý celek. Dítě je v něm často tím nejcitlivějším článkem, který skrze své chování či tělesné potíže může zrcadlit napětí, které si tento systém nese.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zjistila jsem, že tam, kde slova a běžné rady nestačí, může pomoci jemná práce s emocemi a tělem. Tato touha porozumět hlubším souvislostem mě přivedla k metodě Kineziologie One Brain® a dalším přístupům, které mi umožňují jít k samotné podstatě potíží a efektivně uvolňovat vnitřní bloky. Věnuji se i tématům, o kterých se nám rodičům někdy těžko mluví – ať už jde o psychosomatické bolesti, noční pomočování nebo jiné skryté projevy stresu. V poradně LEHKO. pro ně vytvářím prostor plný bezpečí, kde stud nemá místo a kde společně hledáme, co se nám tělo snaží skrze tyto signály říct.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ve své praxi se soustředím na to, jak se dítě cítí uvnitř, a skrze kineziologické nástroje pomáhám odstraňovat stres a strachy, které mu brání v rozletu. Rodičům nabízím podporu, aby celá rodina mohla znovu najít společnou harmonii a klid.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Věřím, že v každém příběhu je ukrytý klíč k řešení. Jsem tu, abych vám i vašim dětem pomohla tento klíč najít – v bezpečném prostředí, s laskavostí a bez posuzování.
              </p>
              <p className="text-2xl font-bold text-primary italic mt-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Aby v životě bylo zase LEHKO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metody Section */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Metody
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Kineziologie One Brain®
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

              <h3 className="text-2xl md:text-3xl font-semibold text-primary pt-8">
                Arteterapie
              </h3>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Arteterapie je laskavý způsob, jak otevřít bránu do dětské duše bez nutnosti hledat složitá slova. Tuto metodu ráda využívám v úvodu našeho setkání jako přirozený most k navázání důvěry. Skrze barvy, tvary a tvoření může dítě nechat volně plynout své pocity, nálady i skrytá přání. Malování či tvoření slouží jako bezpečný prostředek k uvolnění prvotního ostychu a napětí.
              </p>

              <div className="relative mt-10 max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-secondary/30 rounded-full blur-2xl scale-110" />
                <img 
                  src={childIllustration} 
                  alt="Ilustrace šťastného dítěte" 
                  className="relative w-full h-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pro objednání mě prosím kontaktujte telefonicky, nebo využijte můj rezervační systém. Pro potvrzení termínu je zapotřebí uhradit rezervační poplatek ve výši 200 Kč. Ten je plně vratný v případě zrušení konzultace nejpozději 24 hodin předem.
            </p>
          </div>

          <Card className="border-none shadow-soft bg-card">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-xl text-foreground font-medium">60 min</span>
                <span className="text-2xl font-bold text-primary">800 Kč</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-xl text-foreground font-medium">90 min</span>
                <span className="text-2xl font-bold text-primary">1 200 Kč</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-xl text-foreground font-medium">120 min</span>
                <span className="text-2xl font-bold text-primary">1 600 Kč</span>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-4 text-base">
            Cena je závislá na délce sezení. Základem je sazba 800 Kč / hodinu, přičemž výsledná částka se odvíjí podílově od přesné doby strávené na sezení.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Kontaktujte mě
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
          </div>

          <Card className="border-none shadow-soft bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 space-y-8">
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

                <div className="md:col-span-2 flex items-end justify-center">
                  <img 
                    src={contactIllustration} 
                    alt="Ilustrace dítěte" 
                    className="w-full max-w-xs h-auto"
                    style={{ mixBlendMode: 'multiply' }}
                  />
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

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground italic max-w-3xl mx-auto">
              <strong className="not-italic">Informace o poskytovaných službách:</strong> Nabízené služby (Kineziologie One Brain®, metody dle Mgr. Emmerlingové a EFT) jsou poradenské a vzdělávací techniky zaměřené na uvolnění stresu a osobní rozvoj dítěte. Tyto služby nejsou zdravotními službami ve smyslu zákona č. 372/2011 Sb. o zdravotních službách, ani nenahrazují péči lékaře, klinického psychologa či psychiatra. V případě podezření na závažné onemocnění či klinickou poruchu prosím vždy konzultujte stav dítěte s příslušným odborným lékařem.
            </p>
          </div>
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
            Poradna LEHKO.
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
