import styles from "./index.module.css";
import Image from "next/image";


interface HeroProps {
  title?: string;
  subTitle?: string;
  text?: string | boolean;
  imageOn?: boolean;
}

export default function Hero({
  title = "Hayakawa Portfolio",
  subTitle = "マークアップエンジニア（フロントエンド領域対応）",
  text = false,
  imageOn = false,
}: HeroProps) {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      {text && <p className={styles.text}>{text}</p>}
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
