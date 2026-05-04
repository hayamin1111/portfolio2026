import Hero from "@/app/_components/Hero";
import styles from "./page.module.css";
import Image from "next/image";


interface About {
  id: string,
  name: string,
  image: {
    url: string,
    width: number, 
    height: number,
    alt: string,
  },
  occupation: string,
  profile: string,
}

const data: About | null = {
  id: "1",
  name: "hykw",
  image: {
    url: "https://placehold.jp/600x300.png",
    width: 300,
    height: 400,
    alt: "HYKWのイラスト",
  },
  occupation: "マークアップエンジニア（フロントエンド領域対応）",
  profile: "一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる一言入れる"
}


export default function Page() {
  return (
    <>
      <Hero 
        title="About" 
        subTitle="自己紹介"
      />

      {
        data === null ? (
          <p className={styles.none}>プロフィールが登録されていません。</p>
        ) : (
          <div>            
            <Image
              src={data.image.url}
              width={data.image.width}
              height={data.image.height}
              alt={data.image.alt}
              className={styles.image}
            />
            <dl>
              <dt className={styles.name}>{data.name}</dt>
              <dd className={styles.occupation}>{data.occupation}</dd>
              <dd className={styles.profile}>{data.profile}</dd>
            </dl>
          </div>
        )
      }
    </>
  );
}
