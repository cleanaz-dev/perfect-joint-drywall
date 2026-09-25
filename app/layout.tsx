import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
  description:
    'Perfect Joint Drywall delivers expert drywall installation, taping, and carpentry for homes and businesses. Clean work, perfect joints, on-time delivery.',
  openGraph: {
    title: 'Perfect Joint Drywall — Expert Drywall & Carpentry',
    description:
      'Expert drywall installation, taping, and carpentry. Clean work, perfect joints, on-time delivery.',
    type: 'website',
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
