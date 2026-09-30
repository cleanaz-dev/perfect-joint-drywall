import type { Metadata } from 'next';
// 1. IMPORT THE FONT FROM NEXT.JS
import { Inter } from 'next/font/google';
import './globals.css';

// 2. CONFIGURE THE FONT
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during webfont load
});

export const metadata: Metadata = {
  title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
  description:
    'Perfect Joint Drywall delivers expert drywall installation, taping, and carpentry for homes and businesses. Clean work, perfect joints, on-time delivery.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
    description:
      'Expert drywall installation, taping, and carpentry. Clean work, perfect joints, on-time delivery.',
    type: 'website',
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
      {/* 3. ADD THE FONT CLASSNAME TO THE BODY */}
      <body className={`${inter.className} bg-stone-50 text-stone-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}