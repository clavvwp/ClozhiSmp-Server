// PAGE LAYOUT — Wrapper untuk semua halaman inner
'use client';

import { ReactNode } from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import MusicPlayer from './MusicPlayer';
import Footer from '@/components/sections/Footer';

interface PageLayoutProps {
  children: ReactNode;
  accentColor?: string;
}

export default function PageLayout({ children, accentColor = '#a855f7' }: PageLayoutProps) {
  return (
    <>
      <CustomCursor />
      <MusicPlayer />
      <div
        className="min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% -10%, ${accentColor}18 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(34,211,238,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 30% 20% at 20% 80%, rgba(245,197,24,0.05) 0%, transparent 50%),
            #040008
          `,
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
