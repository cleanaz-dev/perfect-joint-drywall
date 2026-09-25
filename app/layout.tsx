import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
  description:
    'Perfect Joint Drywall delivers expert drywall installation, taping, and carpentry for homes and businesses. Clean work, perfect joints, on-time delivery.',
  // 1. THIS ADDS THE LOGO TO THE BROWSER TAB
  icons: {
    icon: '/logo.png',
    apple: '/logo.png', // Shows up if someone saves your site to their iPhone home screen
  },
  openGraph: {
    title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
    description:
      'Expert drywall installation, taping, and carpentry. Clean work, perfect joints, on-time delivery.',
    type: 'website',
    // 2. THIS SHOWS THE LOGO WHEN YOU TEXT/SHARE THE LINK
    images: [
      {
        url: '/logo.png', 
        width: 800,
        height: 600,
        alt: 'Perfect Joint Drywall Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800 antialiased">{children}</body>
    </html>
  );
}