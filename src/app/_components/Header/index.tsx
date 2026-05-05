import Logo from "@/app/_components/Logo";
import Gnav from "@/app/_components/Gnav";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Gnav />
    </header>
  )
}
