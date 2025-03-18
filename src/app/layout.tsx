import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/MainNav/MainNav";

export const metadata: Metadata = {
  title: "Library App",
  description: "Learning app based on next.js and react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="max-w-[1200px] mx-auto my-10">
          <header className="flex mb-10">
            <MainNav />
          </header>
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          </footer>
        </section>
        <Analytics />
      </body>
    </html>
  );
}
