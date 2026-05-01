import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';

export const metadata: Metadata = {
  title: "My new site",
  description: "Hayakawa portfolio 2026",
};

export default function Layout({ children }: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="wrapper">
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
