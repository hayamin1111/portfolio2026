import Link from "next/link";
import styles from "./index.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
      </ul>
    </nav>
  );
}
