import { useState } from "react";
import Icon from "@/components/ui/icon";

const ORNAMENT_URL = "https://cdn.poehali.dev/projects/754132a4-9c44-4812-815f-99ec6d634bd0/files/a09a3712-8e9e-4daa-bfe7-5b8877589b35.jpg";

const initialWishes = [
  { name: "Гөлнара Х.", text: "Аллаh сезне бәхетле итсен! Мөбарәк булсын!" },
  { name: "Рамил Ф.", text: "Гаиләгез нык, мәхәббәтегез мәңгелек булсын!" },
];

const Index = () => {
  const [wishName, setWishName] = useState("");
  const [wishText, setWishText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [allWishes, setAllWishes] = useState(initialWishes);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wishName.trim() && wishText.trim()) {
      setAllWishes([...allWishes, { name: wishName, text: wishText }]);
      setWishName("");
      setWishText("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white font-golos text-slate-800">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url(${ORNAMENT_URL})`, backgroundSize: "600px", backgroundRepeat: "repeat" }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="font-cormorant text-2xl md:text-3xl italic text-slate-600 mb-6 font-light leading-relaxed text-center">
            Кадерле Альберт абый һәм Венера апа!
          </p>

          <div className="flex items-center gap-4 mb-10 w-full max-w-xs">
            <div className="h-px flex-1 bg-blue-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <div className="h-px flex-1 bg-blue-200" />
          </div>

          <p className="font-golos text-xs tracking-[0.3em] uppercase text-blue-400 mb-4 font-light">
            Никах тантанасына чакырабыз
          </p>

          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-slate-800 leading-tight mb-2">
            Рамазан
          </h1>
          <div className="font-cormorant text-3xl text-blue-300 italic mb-2">&</div>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-slate-800 leading-tight mb-10">
            Эндже
          </h1>

          <div className="flex items-center gap-4 mb-10 w-full max-w-xs">
            <div className="h-px flex-1 bg-blue-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <div className="h-px flex-1 bg-blue-200" />
          </div>

          <div className="inline-flex items-center gap-2 border border-blue-200 rounded-full px-6 py-2.5 text-blue-500 text-sm font-golos font-light tracking-wide">
            <Icon name="Calendar" size={14} />
            <span>2026 нче ел, 18 июль</span>
          </div>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-1 text-blue-300 animate-bounce">
          <Icon name="ChevronDown" size={18} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </section>

      {/* Date & Time Section */}
      <section className="py-24 px-4 bg-blue-50/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 mb-3 font-light">Вакыт</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-700">Вакыт һәм Сәгать</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Calendar", label: "Сән", value: "18 июль 2026", sub: "Шимбә" },
              { icon: "Clock", label: "Сәгать", value: "13:00", sub: "UTC+3 · Мәскәү вакыты" },
              { icon: "Sun", label: "Никах", value: "Икенде", sub: "Намаз вакытында" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <Icon name={item.icon as "Calendar"} size={18} className="text-blue-400" />
                </div>
                <p className="text-xs tracking-widest uppercase text-blue-300 mb-1 font-light">{item.label}</p>
                <p className="font-cormorant text-2xl text-slate-700 font-light mb-1">{item.value}</p>
                <p className="text-xs text-slate-400 font-light">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="h-px flex-1 max-w-32 bg-blue-100" />
        <div className="mx-6 text-blue-200 text-2xl">✦</div>
        <div className="h-px flex-1 max-w-32 bg-blue-100" />
      </div>

      {/* Location Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 mb-3 font-light">Урын</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-700">Уздырылу Урыны</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              {[
                {
                  icon: "MapPin",
                  title: "Әл-Мәрҗани мәчете",
                  desc: "Казан ш., Каюм Насыйри ур., 17 нче йорт",
                },
                {
                  icon: "Info",
                  title: "Мәчеткә керү",
                  desc: "Баш керү ишегеннән. Иркен парковка бар.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon as "MapPin"} size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-light text-slate-700 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Navigation" size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-light text-slate-700 mb-1">Маршрут</p>
                  <button className="text-sm text-blue-400 font-light hover:text-blue-600 transition-colors underline underline-offset-4 decoration-blue-200">
                    Яндекс Картада ачу →
                  </button>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-blue-100 h-64 bg-blue-50 flex items-center justify-center shadow-sm">
              <div className="text-center text-blue-300">
                <Icon name="Map" size={40} />
                <p className="text-sm mt-2 font-light">Карта бирелде</p>
              </div>
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-blue-200" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-blue-200" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-blue-200" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-blue-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="h-px flex-1 max-w-32 bg-blue-100" />
        <div className="mx-6 text-blue-200 text-2xl">✦</div>
        <div className="h-px flex-1 max-w-32 bg-blue-100" />
      </div>

      {/* Wishes Section */}
      <section className="py-16 px-4 bg-blue-50/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 mb-3 font-light">Теләкләр</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-700">Котлаулар & Теләкләр</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {allWishes.map((w, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="text-blue-200 font-cormorant text-3xl leading-none mb-3">"</div>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">{w.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-px bg-blue-200" />
                  <p className="text-xs text-blue-400 font-light">{w.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
            <h3 className="font-cormorant text-2xl font-light text-slate-700 mb-6 text-center">
              Үзегезнең теләкне калдырыгыз
            </h3>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-blue-400" />
                </div>
                <p className="text-slate-600 font-light">Теләгегез кабул ителде, рәхмәт!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-blue-300 font-light block mb-2">Исемегез</label>
                  <input
                    type="text"
                    value={wishName}
                    onChange={(e) => setWishName(e.target.value)}
                    placeholder="Исемегезне языгыз..."
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm text-slate-700 font-light placeholder:text-slate-300 focus:outline-none focus:border-blue-300 transition-colors bg-blue-50/30"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-blue-300 font-light block mb-2">Теләгегез</label>
                  <textarea
                    value={wishText}
                    onChange={(e) => setWishText(e.target.value)}
                    placeholder="Котлауларыгызны, теләкләрегезне языгыз..."
                    rows={4}
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm text-slate-700 font-light placeholder:text-slate-300 focus:outline-none focus:border-blue-300 transition-colors bg-blue-50/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 text-sm font-light tracking-wide transition-colors"
                >
                  Теләкне Җибәрү
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url(${ORNAMENT_URL})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
        />
        <div className="relative z-10">
          <div className="text-2xl text-blue-300 mb-4 font-light" style={{ fontFamily: "serif", direction: "rtl" }}>
            جزاكم الله خيراً
          </div>
          <p className="font-cormorant text-xl italic text-slate-500 font-light mb-2">
            Сезне күрергә шатланачакбыз
          </p>
          <p className="text-xs text-slate-300 font-light tracking-wider">Айгөл & Илнар · 2025</p>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
      </footer>
    </div>
  );
};

export default Index;