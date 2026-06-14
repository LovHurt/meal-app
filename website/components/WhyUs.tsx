'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '50+', label: 'Tamamlanan Proje', sub: 'Farklı sektörlerde' },
  { value: '%98', label: 'Müşteri Memnuniyeti', sub: 'Geri bildirim bazlı' },
  { value: '5+', label: 'Yıl Deneyim', sub: 'B2B yazılım geliştirme' },
  { value: '24/7', label: 'Teknik Destek', sub: 'Kritik süreçler için' },
];

const reasons = [
  {
    title: 'Sadece Kod Değil — İş Zekası',
    description:
      'Teknik çözümü değil, işletmenizin büyümesini önceliklendiriyoruz. Her teknik karar, yatırım getirinizi artırmak için alınıyor.',
  },
  {
    title: 'Şeffaf ve Öngörülebilir Süreç',
    description:
      'Hangi aşamada olduğunuzu her zaman biliyorsunuz. Sürpriz maliyet yok, beklenti açığı yok, haftalık raporlama standart.',
  },
  {
    title: 'Teknoloji Agnostik Yaklaşım',
    description:
      'Belirli bir teknoloji ile sizi kilitlemiyor, projenize en uygun stack\'i seçiyoruz. Vendor lock-in yok, çıkış özgürlüğü var.',
  },
  {
    title: 'Kaynak Kod Size Aittir',
    description:
      'Proje bittiğinde tüm kaynak kodlar, belgeler ve altyapı kontrolü size devredilir. Bize bağımlı kalmak zorunda değilsiniz.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0C0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} text-center p-6 bg-[#111113] border border-[#1F1F23] rounded-2xl`}
            >
              <div className="text-4xl lg:text-5xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-white font-semibold text-sm">{stat.label}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Neden Biz?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Teknoloji Ortağınız —{' '}
              <span className="gradient-text">Sadece Tedarikçiniz Değil</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Çoğu yazılım firması size bir ürün teslim eder ve gider. Biz işletmenizin
              büyümesinde uzun vadeli ortak olmak için buradayız.{' '}
              <strong className="text-slate-200">Başarınız, bizim başarımız.</strong>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 btn-glow text-sm"
            >
              Partnerlik Görüşmesi Ayarla →
            </a>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex gap-4 p-4 bg-[#111113] border border-[#1F1F23] rounded-xl hover:border-indigo-500/30 transition-colors duration-300 group cursor-default`}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
