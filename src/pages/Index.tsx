
import Icon from "@/components/ui/icon";

const ORNAMENT_URL = "https://cdn.poehali.dev/projects/754132a4-9c44-4812-815f-99ec6d634bd0/files/a09a3712-8e9e-4daa-bfe7-5b8877589b35.jpg";

const Index = () => {

  return (
    <div className="min-h-screen bg-white font-golos text-slate-800">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* SVG ornament pattern hero */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.12]">
            <defs>
              <pattern id="heroPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <polygon points="60,4 116,32 116,88 60,116 4,88 4,32" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
                <polygon points="60,18 102,40 102,80 60,102 18,80 18,40" fill="none" stroke="#93c5fd" strokeWidth="0.7"/>
                <circle cx="60" cy="60" r="16" fill="none" stroke="#3b82f6" strokeWidth="1"/>
                <circle cx="60" cy="60" r="6" fill="none" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="60" y1="4" x2="60" y2="44" stroke="#bfdbfe" strokeWidth="0.6"/>
                <line x1="60" y1="76" x2="60" y2="116" stroke="#bfdbfe" strokeWidth="0.6"/>
                <line x1="4" y1="32" x2="44" y2="52" stroke="#bfdbfe" strokeWidth="0.6"/>
                <line x1="76" y1="68" x2="116" y2="88" stroke="#bfdbfe" strokeWidth="0.6"/>
                <line x1="116" y1="32" x2="76" y2="52" stroke="#bfdbfe" strokeWidth="0.6"/>
                <line x1="44" y1="68" x2="4" y2="88" stroke="#bfdbfe" strokeWidth="0.6"/>
                <circle cx="60" cy="4" r="2" fill="#93c5fd"/>
                <circle cx="116" cy="32" r="2" fill="#93c5fd"/>
                <circle cx="116" cy="88" r="2" fill="#93c5fd"/>
                <circle cx="60" cy="116" r="2" fill="#93c5fd"/>
                <circle cx="4" cy="88" r="2" fill="#93c5fd"/>
                <circle cx="4" cy="32" r="2" fill="#93c5fd"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)"/>
          </svg>
        </div>
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

          <h1 className="font-cormorant text-7xl md:text-9xl font-light text-blue-900 leading-tight mb-2 italic" style={{ letterSpacing: "-0.02em" }}>
            Рамазан
          </h1>
          <div className="font-cormorant text-3xl text-blue-400 italic mb-2">&</div>
          <h1 className="font-cormorant text-7xl md:text-9xl font-light text-blue-900 leading-tight mb-10 italic" style={{ letterSpacing: "-0.02em" }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            {[
              { icon: "Calendar", label: "Сән", value: "18 июль 2026", sub: "Шимбә" },
              { icon: "Clock", label: "Сәгать", value: "13:00", sub: "UTC+3 · Мәскәү вакыты" },
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
        <div className="h-px flex-1 max-w-32 bg-blue-300" />
        <div className="mx-3 text-blue-300 text-sm">◆</div>
        <div className="mx-1 text-blue-400 text-2xl">✦</div>
        <div className="mx-3 text-blue-300 text-sm">◆</div>
        <div className="h-px flex-1 max-w-32 bg-blue-300" />
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

            </div>

            <div className="relative rounded-2xl overflow-hidden border border-blue-100 h-72 shadow-sm">
              <img
                src="https://cdn.poehali.dev/projects/754132a4-9c44-4812-815f-99ec6d634bd0/bucket/73b79b48-efd3-441b-ae99-acc78be1220e.jpg"
                alt="Әл-Мәрҗани мәчете"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/40 to-transparent px-4 py-3">
                <p className="text-white text-xs font-light tracking-wide">Әл-Мәрҗани мәчете · Казан</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="h-px flex-1 max-w-32 bg-blue-300" />
        <div className="mx-3 text-blue-300 text-sm">◆</div>
        <div className="mx-1 text-blue-400 text-2xl">✦</div>
        <div className="mx-3 text-blue-300 text-sm">◆</div>
        <div className="h-px flex-1 max-w-32 bg-blue-300" />
      </div>

      {/* Message from newlyweds */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15]">
            <defs>
              <pattern id="geo" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
                <polygon points="45,3 87,25 87,65 45,87 3,65 3,25" fill="none" stroke="#2563eb" strokeWidth="1.4"/>
                <polygon points="45,14 76,30 76,60 45,76 14,60 14,30" fill="none" stroke="#93c5fd" strokeWidth="0.8"/>
                <circle cx="45" cy="45" r="14" fill="none" stroke="#3b82f6" strokeWidth="1.1"/>
                <circle cx="45" cy="45" r="5" fill="#bfdbfe"/>
                <line x1="45" y1="3" x2="45" y2="31" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="45" y1="59" x2="45" y2="87" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="3" y1="25" x2="31" y2="38" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="59" y1="52" x2="87" y2="65" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="87" y1="25" x2="59" y2="38" stroke="#93c5fd" strokeWidth="0.8"/>
                <line x1="31" y1="52" x2="3" y2="65" stroke="#93c5fd" strokeWidth="0.8"/>
                <circle cx="45" cy="3" r="2.5" fill="#3b82f6"/>
                <circle cx="87" cy="25" r="2.5" fill="#3b82f6"/>
                <circle cx="87" cy="65" r="2.5" fill="#3b82f6"/>
                <circle cx="45" cy="87" r="2.5" fill="#3b82f6"/>
                <circle cx="3" cy="65" r="2.5" fill="#3b82f6"/>
                <circle cx="3" cy="25" r="2.5" fill="#3b82f6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo)"/>
          </svg>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Decorative frame */}
          <div className="relative border border-blue-100 rounded-3xl p-10 md:p-14 bg-white/80 shadow-sm">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-blue-200 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-blue-200 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-blue-200 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-blue-200 rounded-br-lg" />

            {/* Small diamonds on sides */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-blue-200 rotate-45" />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white border border-blue-200 rotate-45" />

            <p className="text-xs tracking-[0.3em] uppercase text-blue-400 mb-6 font-light text-center">
              Яраткан кунакларыбызга
            </p>

            <div className="text-blue-200 font-cormorant text-5xl leading-none mb-4 text-center">❝</div>

            <p className="font-cormorant text-2xl md:text-3xl text-slate-700 font-light leading-relaxed text-center italic">
              Без бу мөһим көнне сезнең белән бүлешүебезгә бик шат булырбыз!
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-12 bg-blue-200" />
              <span className="font-cormorant text-lg text-blue-400 font-light">Рамазан & Эндже</span>
              <div className="h-px w-12 bg-blue-200" />
            </div>
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
          <p className="font-cormorant text-xl italic text-slate-500 font-light mb-2">
            Сезне күрергә шатланачакбыз
          </p>
          <p className="text-xs text-slate-300 font-light tracking-wider">Рамазан & Эндже · 2026</p>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
      </footer>
    </div>
  );
};

export default Index;