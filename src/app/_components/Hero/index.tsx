import styles from "./index.module.css";

interface Props {
  title?: string;
  text?: string | boolean;
}

export default function Hero({ title = "Hayakawa Portfolio", text = false }: Props) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      {text && <p className={styles.lead}>{text}</p>}
    </div>
  );
}
