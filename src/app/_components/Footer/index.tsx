import Logo from "@/app/_components/Logo";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Logo />
        <p><small>© 2026 Hayakawa</small></p>
      </div>
    </footer>
  )
}
