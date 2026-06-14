import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'B2B Yazılım Geliştirme & Dijital Dönüşüm | Alcan Değer',
  description:
    'B2B şirketlere özel yazılım çözümleri: web uygulamaları, mobil uygulamalar, SaaS platformları, yapay zeka entegrasyonu ve dijital dönüşüm danışmanlığı. Teknoloji yatırımınızı büyümeye dönüştürüyoruz.',
  keywords:
    'B2B yazılım geliştirme, özel yazılım, web uygulaması geliştirme, mobil uygulama geliştirme, SaaS platform, yapay zeka entegrasyonu, dijital dönüşüm, yazılım danışmanlığı, Türkiye',
  authors: [{ name: 'Alcan Değer' }],
  creator: 'Alcan Değer',
  openGraph: {
    title: 'B2B Yazılım Geliştirme & Dijital Dönüşüm | Alcan Değer',
    description:
      'B2B şirketlere özel yazılım geliştirme, SaaS platformları ve yapay zeka entegrasyonu. İlk görüşme ücretsiz.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Alcan Değer — Software & Digital Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Yazılım Geliştirme & Dijital Dönüşüm',
    description: 'B2B şirketlere özel yazılım çözümleri. İlk görüşme ücretsiz.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': '#organization',
      name: 'Alcan Değer',
      description:
        'B2B şirketlere özel yazılım geliştirme, web uygulamaları, mobil uygulamalar, SaaS platformları, yapay zeka entegrasyonu ve dijital dönüşüm danışmanlığı hizmetleri sunan teknoloji şirketi.',
      founder: {
        '@type': 'Person',
        name: 'Alcan Değer',
        jobTitle: 'Founder & CEO',
        knowsAbout: [
          'Software Development',
          'B2B Technology Solutions',
          'SaaS Platforms',
          'AI Integration',
          'Digital Transformation',
        ],
      },
      areaServed: { '@type': 'Country', name: 'Turkey' },
      knowsLanguage: ['tr', 'en'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'alcndgdr@gmail.com',
      },
    },
    {
      '@type': 'Service',
      provider: { '@id': '#organization' },
      name: 'B2B Yazılım Geliştirme ve Dijital Dönüşüm',
      serviceType: 'Software Development',
      description:
        'Özel web uygulamaları, mobil uygulamalar, SaaS platformları ve yapay zeka entegrasyonu ile B2B şirketlerin dijital altyapısını güçlendiriyoruz.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Yazılım Geliştirme Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Özel Web Uygulaması Geliştirme' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobil Uygulama Geliştirme' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Platform Geliştirme' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yapay Zeka & Otomasyon Entegrasyonu' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Geliştirme & Entegrasyon' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dijital Dönüşüm Danışmanlığı' } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#09090B] text-[#F8FAFC]`}>
        {children}
      </body>
    </html>
  );
}
