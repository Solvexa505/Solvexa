import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhoWeAre from '@/components/sections/WhoWeAre';
import AboutUs from '@/components/sections/AboutUs';
import Creating from '@/components/sections/Creating';
import Projects from '@/components/sections/Projects';
import Innovation from '@/components/sections/Innovation';
import Research from '@/components/sections/Team';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <AboutUs />
      <Creating />
      <Projects />
      <Innovation />
      <Research />
      <Footer />
    </div>
  );
};

export default Index;
