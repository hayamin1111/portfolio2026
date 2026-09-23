import styles from "./index.module.css";

/**
 * 外部リンクSVG
 * */

export default function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.15 21.12"
      fill="currentColor"
      className={styles.externalLink}
      aria-hidden="true"
    >
      <polygon points="15.68 19.16 1.96 19.16 1.96 5.44 10.78 5.44 12.74 3.48 0 3.48 0 21.12 17.64 21.12 17.64 8.38 15.68 10.34 15.68 19.16" />
      <polygon points="12.97 0 16.09 3.12 5.41 13.79 7.39 15.77 18.06 5.09 21.12 8.15 21.15 0 12.97 0" />
    </svg>
  );
}
