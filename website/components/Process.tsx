'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Keşif & Analiz',
    description:
      'İşletmenizin ihtiyaçlarını, hedeflerini ve mevcut teknik altyapısını derinlemesine analiz ediyoruz. Rakip analizi ve kullanıcı ihtiyaç haritalaması ile sağlam bir temel oluşturuyoruz.',
    duration: '1–2 Hafta',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    number: '02',
    title: 'Strateji & Mimari',
    description:
      'Size özel teknoloji yol haritası ve yazılım mimarisini tasarlıyoruz. Hangi teknoloji, neden ve ne zaman sorusunu netleştirip bütçe ile zaman çizelgesi belirliyoruz.',
    duration: '1 Hafta',
    color: 'from-violet-500 to-violet-600',
  },
  {
    number: '03',
    title: 'Çevik Geliştirme',
    description:
      '2 haftalık sprint döngüleri ile hızlı, test edilmiş ve belgelenmiş kod üretiyoruz. Her sprint\'te çalışan bir versiyon sunuyor, geri bildirimlerinize göre yön veriyoruz.',
    duration: '4–16 Hafta',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '04',
    title: 'Lansman & Büyüme',
    description:
      'Canlıya alım sonrası izleme, optimizasyon ve ölçeklendirme desteği. Kullanıcı verilerini analiz ederek ürününüzü sürekli geliştiriyoruz.',
    duration: 'Süregelen',
    color: 'from-fuchsia-500 to-fuchsia-600',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="process" ref={sectionRef} className="py-24 lg:py-32 bg-[#0C0C10] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/[0.04] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Nasıl Çalışırız
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Başarılı Projelerin{' '}
            <span className="gradient-text">Arkasındaki Süreç</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Her karar şeffaf, her adım ölçülebilir. Sizi sürecin dışında bırakmıyoruz — birlikte
            ilerliyoruz.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative p-6 bg-[#111113] border border-[#1F1F23] rounded-2xl card-hover flex flex-col items-center text-center`}
            >
              {/* Number badge */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-black text-white mb-4 shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform duration-300`}
              >
                {step.number}
              </div>

              {/* Duration */}
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20 mb-3">
                {step.duration}
              </span>

              <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#09090B] border border-[#1F1F23] items-center justify-center">
                  <svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-12 reveal text-center">
          <p className="text-slate-500 text-sm">
            Her proje farklıdır — süreç sizin ihtiyaçlarınıza göre uyarlanır.
          </p>
        </div>
      </div>
    </section>
  );
}
