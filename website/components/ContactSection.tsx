'use client';

import { useState, useEffect, useRef } from 'react';

const budgetOptions = [
  { value: '', label: 'Seçiniz' },
  { value: '10-25k', label: '₺10.000 – ₺25.000' },
  { value: '25-50k', label: '₺25.000 – ₺50.000' },
  { value: '50-100k', label: '₺50.000 – ₺100.000' },
  { value: '100k+', label: '₺100.000+' },
  { value: 'discuss', label: 'Görüşerek belirleyelim' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to email service (e.g., Resend, EmailJS, or your own API route)
    await new Promise((r) => setTimeout(r, 800)); // simulate async
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-[#0D0D10] border border-[#1F1F23] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 placeholder:text-slate-600';

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-[#09090B] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full filter blur-[160px] opacity-[0.07]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600 rounded-full filter blur-[140px] opacity-[0.06]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <div className="reveal">
            <span className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em]">
              İletişim
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Projenizi Hayata Geçirmeye{' '}
              <span className="gradient-text">Hazır mısınız?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              İlk adımı atın. Ücretsiz keşif görüşmesinde projenizi, bütçenizi ve
              beklentilerinizi konuşalım.{' '}
              <strong className="text-slate-200">
                72 saat içinde detaylı teknik analiz ve önerimizle geri döneceğiz.
              </strong>
            </p>

            {/* Contact links */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:alcndgdr@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">alcndgdr@gmail.com</span>
              </a>
              <a
                href="https://wa.me/90XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.56 4.136 1.534 5.875L0 24l6.335-1.52A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.658-.505-5.184-1.387l-.37-.22-3.836.921.976-3.667-.241-.377A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <span className="text-sm">WhatsApp ile hızlı iletişim</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🔒', label: 'NDA Gizlilik' },
                { icon: '🎯', label: 'Ücretsiz Analiz' },
                { icon: '⚡', label: '72s Yanıt' },
              ].map((b) => (
                <div key={b.label} className="text-center p-3 bg-[#111113] border border-[#1F1F23] rounded-xl">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-slate-400 text-xs font-medium">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <div className="bg-[#111113] border border-[#1F1F23] rounded-2xl p-6 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="text-6xl mb-4 animate-float">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mesajınız Alındı!</h3>
                  <p className="text-slate-400">
                    72 saat içinde size dönüş yapacağız. Teşekkürler!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        Ad Soyad <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Şirket</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                        placeholder="Şirket Adı"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        E-posta <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        placeholder="email@sirket.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Telefon</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Tahmini Bütçe
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass}
                    >
                      {budgetOptions.map((o) => (
                        <option key={o.value} value={o.value} className="bg-[#0D0D10]">
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Projenizi Anlatın <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Ne yapmak istiyorsunuz? Hangi sorunu çözmeye çalışıyorsunuz? Şu an nasıl çözdüğünüzü ve idealdeki çözümü anlatın..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 btn-glow text-base"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      'Ücretsiz Görüşme Talep Et →'
                    )}
                  </button>

                  <p className="text-center text-slate-600 text-xs">
                    Bilgileriniz kesinlikle gizli tutulur. Spam göndermiyoruz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
