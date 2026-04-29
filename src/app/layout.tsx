import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';

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
