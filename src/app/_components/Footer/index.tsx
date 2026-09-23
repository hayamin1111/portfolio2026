import ExternalIcon from "@/app/_components/icons/ExternalIcon";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          <small>© 2026 Hayakawa Emi</small>
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/hayamin1111"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ExternalIcon />
          </a>
          <a
            href="https://ehykw.com/blog/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ブログ
            <ExternalIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
