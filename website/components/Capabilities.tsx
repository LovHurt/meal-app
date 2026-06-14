'use client';

import { useEffect, useRef } from 'react';

const columns = [
  {
    category: 'Web & Platform',
    accent: 'indigo',
    items: [
      { icon: '🛒', name: 'B2B E-Ticaret Platformları', desc: 'Toptan satış, teklif ve sipariş yönetimi' },
      { icon: '📊', name: 'SaaS Dashboard\'ları', desc: 'Karmaşık veriyi sezgisel arayüze dönüştürün' },
      { icon: '🏢', name: 'Müşteri & Bayi Portalları', desc: 'Self-servis müşteri deneyimi' },
      { icon: '📝', name: 'İçerik Yönetim Sistemleri', desc: 'Tam kontrolünüzde, özel CMS' },
      { icon: '📅', name: 'Rezervasyon & Planlama Araçları', desc: 'Online randevu ve kaynak planlama' },
    ],
  },
  {
    category: 'Yapay Zeka & Otomasyon',
    accent: 'violet',
    items: [
      { icon: '🤖', name: 'AI Chatbot & Asistanlar', desc: 'Müşteri desteğini ve satışı otomatize edin' },
      { icon: '📈', name: 'Akıllı Analitik & Raporlama', desc: 'Veriden anlık karar üretin' },
      { icon: '⚡', name: 'İş Akışı Otomasyonu', desc: 'Tekrarlayan süreçleri AI\'a bırakın' },
      { icon: '📄', name: 'Doküman & Form İşleme', desc: 'OCR, akıllı sözleşme okuma' },
      { icon: '🔍', name: 'Anlamsal Arama Motorları', desc: 'Vektör tabanlı, akıllı içerik arama' },
    ],
  },
  {
    category: 'Mobil & Entegrasyon',
    accent: 'purple',
    items: [
      { icon: '🏗️', name: 'Saha Personel Uygulamaları', desc: 'Offline-first, saha uyumlu mobil çözümler' },
      { icon: '🔗', name: 'ERP / CRM Entegrasyonları', desc: 'SAP, Salesforce, HubSpot, Odoo bağlantısı' },
      { icon: '💳', name: 'Ödeme & Fatura Sistemleri', desc: 'Stripe, iyzico, Payu entegrasyonu' },
      { icon: '📬', name: 'Bildirim & İletişim Altyapısı', desc: 'Push, SMS, e-posta otomasyonu' },
      { icon: '📡', name: 'IoT & Gerçek Zamanlı Veri', desc: 'Cihaz verilerini anlık işleme' },
    ],
  },
];

export default function Capabilities() {
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
    <section id="capabilities" ref={sectionRef} className="py-24 lg:py-32 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Yapabileceklerimiz
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Hayalinizdeki Ürünü{' '}
            <span className="gradient-text">Gerçeğe Dönüştürüyoruz</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Portföy yerine yeteneklerimize bakın. Aşağıdakilerin tamamını sıfırdan
            tasarlayıp geliştirebiliyoruz.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col, ci) => (
            <div
              key={ci}
              className={`reveal reveal-delay-${ci + 1} bg-[#111113] border border-[#1F1F23] rounded-2xl p-6`}
            >
              <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-6 pb-3 border-b border-[#1F1F23]">
                {col.category}
              </h3>
              <div className="space-y-4">
                {col.items.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-3 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A22] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-indigo-500/15 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-200 text-sm font-semibold group-hover:text-indigo-300 transition-colors duration-200">
                        {item.name}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 reveal gradient-border-box p-6 lg:p-8 text-center noise-overlay relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.06] to-violet-500/[0.06] pointer-events-none rounded-2xl" />
          <div className="relative">
            <p className="text-white font-semibold text-lg mb-2">
              Listede görmediğiniz bir şeye mi ihtiyacınız var?
            </p>
            <p className="text-slate-400 mb-6 text-sm">
              Teknolojik olarak mümkünse, büyük ihtimalle yapabiliriz.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 btn-glow hover:scale-105 text-sm"
            >
              Projenizi Anlatın →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
