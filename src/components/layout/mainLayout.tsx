import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/components/layout/mainLayout.module.css';

/**
 * 基本レイアウト
 * - 全ページ共通
 * - ヘッダー・ナビゲーション・フッター
 */
interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      
      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
