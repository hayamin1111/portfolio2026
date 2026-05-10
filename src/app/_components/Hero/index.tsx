import styles from "./index.module.css";


interface Props {
  title?: string;
  subTitle?: string;
  text?: string | boolean;
}

export default function Hero({
  title = "Hayakawa Portfolio",
  subTitle = "マークアップエンジニア（フロントエンド領域対応）",
  text = false,
}: Props) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      {text && <p className={styles.lead}>{text}</p>}
    </div>
  );
}
