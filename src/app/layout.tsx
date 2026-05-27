// ============================================
// ROOT LAYOUT (src/app/layout.tsx)
// This wraps every page. Add global providers
// or components here (e.g. analytics, fonts).
// ============================================

import type { Metadata } from 'next';
// import './globals.css';

// ── SEO metadata — edit this for your server ──
export const metadata: Metadata = {
  title: 'CLOZHI SMP — A New Era of Minecraft Survival',
  description:
    'Join CLOZHI SMP — the most immersive Minecraft survival experience. Economy, Clan Wars, PvP Arenas, Custom Items and more.',
  keywords: ['Minecraft', 'SMP', 'Survival', 'CLOZHI', 'PvP', 'Minecraft Server'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
