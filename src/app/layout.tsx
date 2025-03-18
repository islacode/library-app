import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import './globals.css';
import MainNav from '@/components/MainNav/MainNav';

export const metadata: Metadata = {
  title: 'Library App',
  description: 'Learning app based on next.js and react',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="mx-auto my-10 max-w-[1200px]">
          <header className="mb-10 flex">
            <MainNav />
          </header>
          <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
        </section>
        <Analytics />
      </body>
    </html>
  );
}
