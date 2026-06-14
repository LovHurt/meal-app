'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Özel Web Uygulamaları',
    description:
      'Şirketinizin tam ihtiyacına göre şekillendirilmiş, ölçeklenebilir ve yüksek performanslı web platformları. Hazır çözümlerin yapamadığını biz yapıyoruz.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobil Uygulama Geliştirme',
    description:
      'iOS ve Android için native performans sunan cross-platform uygulamalar. Sahadan ofise, çalışanlarınız ve müşterileriniz için akıcı mobil deneyim.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'SaaS Platform Geliştirme',
    description:
      'Abonelik bazlı gelir modeli için güçlü SaaS altyapıları. Çok kiracılı mimari, ödeme entegrasyonu ve kullanıcı yönetimi dahil.',
    tags: ['SaaS', 'Multi-tenant', 'Stripe', 'Auth'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Yapay Zeka & Otomasyon',
    description:
      'İş süreçlerinizi AI ile otomatize edin, insan hatasını sıfıra indirin. Chatbot entegrasyonu, akıllı veri işleme ve LLM tabanlı iş akışları.',
    tags: ['OpenAI', 'LLM', 'Automation', 'RAG'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'API Geliştirme & Entegrasyon',
    description:
      'Mevcut sistemlerinizi birbirine bağlayan güçlü REST ve GraphQL API\'ler. ERP, CRM, muhasebe yazılımı ve üçüncü parti servisler arasında sorunsuz veri akışı.',
    tags: ['REST API', 'GraphQL', 'Webhooks', 'Microservices'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Dijital Dönüşüm Danışmanlığı',
    description:
      'Teknik borçtan kurtulun, süreçleri modernize edin. Teknoloji yol haritanızı birlikte çizip doğru kararları almanız için yanınızdayız.',
    tags: ['Strategy', 'Architecture', 'Tech Audit', 'Roadmap'],
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            İşletmenize Özel{' '}
            <span className="gradient-text">Teknoloji Çözümleri</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Fikir aşamasından enterprise ölçeğe kadar, doğru teknolojiyi seçip
            hayata geçiriyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal group relative p-6 bg-[#111113] border border-[#1F1F23] rounded-2xl card-hover cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-lg border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer nudge */}
        <div className="mt-12 text-center reveal">
          <p className="text-slate-500 text-sm mb-3">
            Tam olarak ne ihtiyacınız olduğundan emin değil misiniz?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
          >
            Birlikte analiz edelim
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
