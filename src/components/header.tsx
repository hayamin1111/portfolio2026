import Logo from "@/components/logo";
import Nav from '@/components/nav';
import styles from '@/components/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
