import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Capabilities from '@/components/Capabilities';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Capabilities />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
