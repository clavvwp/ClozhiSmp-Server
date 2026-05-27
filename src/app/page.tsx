'use client';

import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ScreenshotSection from '@/components/sections/ScreenshotSection';
import ServerStatusSection from '@/components/sections/ServerStatusSection';
import CommunitySection from '@/components/sections/CommunitySection';
import Footer from '@/components/sections/Footer';

// import CustomCursor from '@/components/ui/CustomCursor';
// import LoadingScreen from '@/components/ui/LoadingScreen';

export default function HomePage() {
  return (
    <>
      {/* <CustomCursor /> */}
      {/* <LoadingScreen /> */}

      <main className="gradient-bg min-h-screen">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ScreenshotSection />
        <ServerStatusSection />
        <CommunitySection />
        <Footer />
      </main>
    </>
  );
}