import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
