import styles from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

export default function DecoHeaeder({ children }: Props) {
  return (
    <p aria-hidden="true" className={styles.heading}>
      &#47;&#47; {children}
    </p>
  );
}
