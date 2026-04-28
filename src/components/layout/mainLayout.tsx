import Header from '@/components/header';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

/**
 * 基本レイアウト
 * - 全ページ共通
 * - ヘッダー・ナビゲーション・フッター
 */
export default function MainLayout({ children }: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Nav />
      
      <main>
        {children}
      </main>

      <Footer />

    </>
  );
}
