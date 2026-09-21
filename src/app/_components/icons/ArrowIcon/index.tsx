import styles from "./index.module.css";

/**
 * 矢印SVG
 * */

export default function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264 201"
      fill="currentColor"
      className={styles.arrow}
      aria-hidden="true"
    >
      <rect className={styles.shaft} x="0" y="78" width="163" height="45" />
      <path className={styles.head} d="M163 20 L264 101 L163 181 Z" />
    </svg>
  );
}
