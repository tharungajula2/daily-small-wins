import type { Metadata, Viewport } from 'next';
import './globals.css';
import AppLifecycleManager from '@/components/core/AppLifecycleManager';
import { CircadianProvider } from '@/components/core/CircadianProvider';

export const metadata: Metadata = {
  title: 'Daily Small Wins | A calm daily reflection',
  description: 'A calm daily structure prototype for capturing small wins and reflecting on the day.',
  applicationName: 'Daily Small Wins',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  manifest: '/manifest.json',
  openGraph: {
    title: 'Daily Small Wins | A calm daily reflection',
    description: 'A daily structure prototype for capturing small wins and reflecting on the day.',
    siteName: 'Daily Small Wins',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Daily Small Wins | A calm daily reflection',
    description: 'A daily structure prototype for capturing small wins and reflecting on the day.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Daily Small Wins',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F6F2' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C1E' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink-primary antialiased min-h-screen">
        <AppLifecycleManager />
        <CircadianProvider>
          {children}
        </CircadianProvider>
      </body>
    </html>
  );
}
