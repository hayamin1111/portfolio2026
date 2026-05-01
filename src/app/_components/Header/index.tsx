import Logo from "@/app/_components/Logo";
import Nav from "@/app/_components/Nav";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
