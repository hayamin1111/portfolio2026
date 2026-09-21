import styles from "@/app/page.module.css";
import FirstView from "@/app/_components/FirstView";
import Button from "@/app/_components/Button";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";

export default function Home() {
  return (
    <>
      <FirstView />
      <div className={styles.buttons}>
        <Button href="/about">
          Hayakawaを知る
          <ArrowIcon />
        </Button>
        <Button href="/works">個人制作を見る</Button>
      </div>
    </>
  );
}
