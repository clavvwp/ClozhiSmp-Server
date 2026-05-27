// ============================================
// MAIN PAGE (src/app/page.tsx)
// This is the home page. It just puts all the
// sections together in order. Easy to rearrange!
// ============================================

'use client';

import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ScreenshotSection from '@/components/sections/ScreenshotSection';
import ServerStatusSection from '@/components/sections/ServerStatusSection';
import CommunitySection from '@/components/sections/CommunitySection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      {/* Custom animated cursor */}
      <CustomCursor />

      {/* Loading screen shown on first visit */}
      <LoadingScreen />

      {/* Main site content */}
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
