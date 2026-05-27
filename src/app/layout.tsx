// Root layout — wraps every page
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CLOZHI SMP — A New Era of Minecraft Survival',
  description: 'Join CLOZHI SMP — the most immersive Minecraft survival experience. Economy, Clan Wars, PvP Arenas, Custom Items and more.',
  keywords: ['Minecraft', 'SMP', 'Survival', 'CLOZHI', 'PvP', 'Minecraft Server'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
