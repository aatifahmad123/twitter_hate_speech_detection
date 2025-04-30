import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BackToTopButton from '@/components/layout/back-to-top-button';
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported

export const metadata: Metadata = {
  title: 'HateCheck: Hate Speech Detection on Twitter Analysis',
  description: 'A project by Aatif Ahmad analyzing hate speech detection models on Twitter data.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTopButton />
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
