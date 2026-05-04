import Hero from "@/app/_components/Hero";
import styles from "@/app/page.module.css";
import Button from "@/app/_components/Button";

export default function Home() {
  return (
    <>
      <Hero
        title = "Hayakawa Portfolio"
        subTitle = "マークアップエンジニア（フロントエンド領域対応）"
        text = "マークアップを軸に、更新性・拡張性を意識したサイト構築を行っています。"
      />
      <div className={styles.buttons}>
        <Button href="/about">
          HYKWについて知る
        </Button>
        <Button href="/works">
          個人制作を見る
        </Button>
      </div>
    </>
  );
}
