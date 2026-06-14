import Link from 'next/link';

const links = {
  Hizmetler: [
    { label: 'Web Uygulamaları', href: '#services' },
    { label: 'Mobil Geliştirme', href: '#services' },
    { label: 'SaaS Platformları', href: '#services' },
    { label: 'Yapay Zeka & Otomasyon', href: '#services' },
    { label: 'API Entegrasyonu', href: '#services' },
  ],
  Şirket: [
    { label: 'Nasıl Çalışırız', href: '#process' },
    { label: 'Yapabileceklerimiz', href: '#capabilities' },
    { label: 'Neden Biz?', href: '#capabilities' },
    { label: 'İletişim', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-[#1A1A1F] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.35)]">
                <span className="text-white font-black text-sm">AD</span>
              </div>
              <span className="text-white font-bold text-lg">
                Alcan<span className="text-indigo-400">.</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              B2B şirketlere özel yazılım geliştirme ve dijital dönüşüm çözümleri.
              Teknoloji ortağınız — sadece tedarikçiniz değil.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200"
            >
              Görüşme Ayarla →
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-bold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + bottom row */}
        <div className="border-t border-[#1A1A1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Alcan Değer. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['SEO Optimized', 'GEO Ready', 'Made in Turkey'].map((badge, i, arr) => (
              <span key={badge} className="flex items-center gap-3">
                <span className="text-slate-600 text-xs">{badge}</span>
                {i < arr.length - 1 && <span className="w-1 h-1 bg-slate-700 rounded-full" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
