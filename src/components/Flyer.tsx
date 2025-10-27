import { Card } from "@/components/ui/card";

export const Flyer = () => {
  return (
    <div 
      id="flyer-content" 
      className="bg-white p-12 max-w-[800px] mx-auto"
      style={{ width: '800px', minHeight: '1000px' }}
    >
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-primary/20">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Mgr. Petra Strnadová
        </h1>
        <div className="h-1 w-24 bg-primary/60 mx-auto mb-4 rounded-full" />
        <h2 className="text-2xl text-primary font-light">
          Terapeutická poradna
        </h2>
        <p className="text-xl text-gray-700 mt-2">
          Kineziologie One Brain
        </p>
      </div>

      {/* Quote */}
      <div className="text-center mb-8 italic text-gray-700 text-lg">
        „Cesta k uzdravení začíná porozuměním sobě samému."
      </div>

      {/* What is Kinesiology */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="h-1 w-8 bg-primary/60 mr-3 rounded-full" />
          Co je Kineziologie One Brain
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Jemná, ale účinná terapeutická metoda, která pomáhá uvolňovat emocionální bloky, 
          stres a hluboce uložené vzorce z minulosti.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pracuje se svalovým testem, který jemně vede ke zdroji problému – 
          nejen na vědomé úrovni, ale i v hlubších vrstvách podvědomí.
        </p>
      </div>

      {/* What can help with */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="h-1 w-8 bg-primary/60 mr-3 rounded-full" />
          S čím vám mohu pomoci
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Vztahové vzorce</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Psychosomatické potíže</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Dlouhodobý stres</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Zpracování traumat</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Úzkosti a strachy</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Emoční náročné situace</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Pocit "zaseknutí"</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">Návrat k rovnováze</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-gray-700 text-sm">
            <strong>U dětí:</strong> potíže se školou, strachy, noční můry, separační úzkost
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="h-1 w-8 bg-primary/60 mr-3 rounded-full" />
          Ceník
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-primary/20 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">Dospělí</p>
            <p className="text-3xl font-bold text-primary">1 600 Kč</p>
            <p className="text-sm text-gray-600 mt-2">90–120 minut</p>
          </div>
          <div className="border-2 border-primary/20 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">Děti</p>
            <p className="text-3xl font-bold text-primary">900 Kč</p>
            <p className="text-sm text-gray-600 mt-2">60–90 minut</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Kontakt
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold text-gray-900">Telefon:</span>
            <span className="text-gray-700">+420 792 767 332</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold text-gray-900">Email:</span>
            <span className="text-gray-700">poradna@petrastrnad.cz</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold text-gray-900">Adresa:</span>
            <span className="text-gray-700">Na Žižkově 1080, Liberec</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Terapie probíhá v bezpečném a respektujícím prostředí
        </p>
      </div>
    </div>
  );
};
