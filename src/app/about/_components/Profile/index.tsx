import styles from "./index.module.css";
import Image from "next/image";

interface Profile {
  id: string;
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  occupation: string;
  introduction: string[];
  hobbies: { name: string; text: string }[];
}

const data: Profile = {
  id: "1",
  name: "Emi Hayakawa",
  image: {
    url: "/image/about.jpg",
    width: 300,
    height: 400,
    alt: "meta questを楽しむhayakawaの画像",
  },
  occupation: "マークアップ & フロントエンドエンジニア",
  introduction: [
    "Web制作に約6年間携わり、HTML / CSS / JavaScript / TypeScriptを中心としたマークアップ・フロントエンド実装を経験してきました。WordPressのオリジナルテーマ構築、PowerCMS / Movable Typeを用いたサイト構築・運用のほか、TypeScriptによるWebシステムのフロントエンド開発にも携わっています。",
    "デザインを忠実に再現することだけでなく、その後の更新や運用を考えた、崩れにくく扱いやすい実装を大切にしています。現在はReact / Next.jsを使った個人開発にも取り組み、フロントエンド領域での経験を広げています。",
    "約1年ほどWeb制作を離れて造形の仕事に携わっていましたが、異業種を経験したことで、技術を使って課題を整理し形にしていくWebの仕事が自分に合っていると改めて感じました。これまでのマークアップやCMS構築の経験を土台に、実装領域を広げながら、長く技術を磨いていきたいと考えています。",
  ],
  hobbies: [
    {
      name: "VRゴーグル",
      text: "Meta Questでのリズムゲームが好きで、楽しみながら体を動かせる運動習慣になっています。",
    },
    {
      name: "ゲーム",
      text: "アクション・RPGが好きです。特に好きなゲームは『Witcher3』『仁王3』『NieR:Automata』。",
    },
    {
      name: "ドライブ",
      text: "仕事でハイエースを運転する必要があったので、休日に練習して長年のペーパードライバーを卒業しました。今ではドライブが息抜きの時間になっています。",
    },
  ],
};

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.image}>
        <Image
          src={data.image.url}
          width={data.image.width}
          height={data.image.height}
          alt={data.image.alt}
          preload
          loading="eager"
          quality={70}
        />
        <small className={styles.caption}>
          趣味のVRとアクションゲームをモチーフに、自身の写真からAIで生成
        </small>
      </div>
      <div className={styles.textArea}>
        <h2 className={styles.name}>{data.name}</h2>
        <p className={styles.occupation}>{data.occupation}</p>
        {data.introduction.map((paragraph, index) => (
          <p key={index} className={styles.introduction}>
            {paragraph}
          </p>
        ))}
        <section className={styles.hobbies}>
          <h3 className={styles.heading}>趣味・好きなこと</h3>
          <ul className={styles.hobbiesList}>
            {data.hobbies.map((hobby) => (
              <li key={hobby.name} className={styles.hobby}>
                {hobby.name}：{hobby.text}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
