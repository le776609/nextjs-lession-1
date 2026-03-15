import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Lesson 1',
  description: 'A simple Next.js app with multiple demo screens',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
