import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import EcosystemSection from '@/components/EcosystemSection';
import AIProductSection from '@/components/AIProductSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <EcosystemSection />
      <AIProductSection />
      <AnalyticsSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
