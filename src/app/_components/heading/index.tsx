import styles from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return <h2 className={styles.heading}>&nbsp;&nbsp;{children}</h2>;
}
