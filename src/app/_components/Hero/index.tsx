import styles from "./index.module.css";
import Image from "next/image";


interface HeroProps {
  title?: string;
  subTitle?: string;
  text?: string;
  imageOn?: boolean;
}

export default function Hero({
  title = "Hayakawa Portfolio",
  subTitle = "マークアップエンジニア（フロントエンド領域対応）",
  text = "マークアップを軸に、更新性・拡張性を意識したサイト構築を行っています。",
  imageOn = false,
}: HeroProps) {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      <p className={styles.text}>{text}</p>
      {imageOn && <figure>[画像]</figure>}
      <Image
        src="/logo.svg"
        alt="xxx"
        className="xxx"
        width={300}
        height={200}
        priority
      />
    </div>
  );
}
