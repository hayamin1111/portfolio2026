import styles from '@/components/header.module.css'

interface HeroProps {
  title?: string;
  subTitle?: string;
  imageOn?: boolean;
}

export default function Hero({
  title = "デフォルトタイトル",
  subTitle = "デフォルトサブタイトル",
  imageOn = false,
}: HeroProps) {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
