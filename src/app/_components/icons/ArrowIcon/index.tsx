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
      <path
        fill="currentColor"
        d="
          M0 78
          H163
          V20
          L264 101
          L163 181
          V123
          H0
          Z
        "
      />
    </svg>
  );
}
