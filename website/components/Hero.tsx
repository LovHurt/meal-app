import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-indigo-600 rounded-full filter blur-[140px] opacity-[0.08] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-violet-600 rounded-full filter blur-[120px] opacity-[0.07] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-indigo-400 rounded-full filter blur-[100px] opacity-[0.05]" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          B2B Yazılım &amp; Dijital Dönüşüm Uzmanı
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-white mb-6 animate-fade-up">
          İşletmenizin{' '}
          <span className="gradient-text">Dijital Gücünü</span>
          <br />
          Birlikte İnşa Ediyoruz
        </h1>

        {/* Sub headline */}
        <p
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.15s', opacity: 0 }}
        >
          Özel yazılım çözümleri, SaaS platformları ve yapay zeka entegrasyonu ile
          şirketinizin teknoloji altyapısını rakiplerinin önüne geçiriyoruz.{' '}
          <strong className="text-slate-200 font-semibold">
            Tek seferlik teslimat değil — uzun vadeli teknoloji ortaklığı.
          </strong>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-base transition-all duration-200 btn-glow hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Ücretsiz Keşif Görüşmesi Al →
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl text-base border border-white/10 hover:border-white/25 transition-all duration-200"
          >
            Hizmetlerimizi İncele
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500 text-sm animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          {[
            'İlk görüşme tamamen ücretsiz',
            '72 saat içinde teknik analiz',
            'NDA ile proje güvencesi',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-float">
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
