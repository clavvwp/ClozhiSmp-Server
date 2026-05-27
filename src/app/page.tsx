// MAIN PAGE — Home
'use client';

import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/ui/Navbar';
import MusicPlayer from '@/components/ui/MusicPlayer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ScreenshotSection from '@/components/sections/ScreenshotSection';
import ServerStatusSection from '@/components/sections/ServerStatusSection';
import CommunitySection from '@/components/sections/CommunitySection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <MusicPlayer />
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
