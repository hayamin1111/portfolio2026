import styles from "./index.module.css";
import Heading from "@/app/_components/Heading";

interface Career {
  startYYYY: string;
  startMM: string;
  endYYYY?: string;
  endMM?: string;
  company: string;
  occupation: string;
  detail: string;
}

const data: Career[] = [
  {
    startYYYY: "2019",
    startMM: "10",
    endYYYY: "2024",
    endMM: "2",
    company: "Web制作会社",
    occupation: "HTMLコーダー / Webデザイナー",
    detail:
      "静的サイト制作やWebデザイン、CMSの更新・運用を中心に担当。マークアップやスタイリング、顧客折衝や進行管理、見積もり作成など広く経験を積みました。",
  },
  {
    startYYYY: "2024",
    startMM: "3",
    endYYYY: "2025",
    endMM: "9",
    company: "Web制作会社",
    occupation: "マークアップ / フロントエンド エンジニア",
    detail:
      "マークアップだけでなくCMS構築やTypeScriptを用いたUI実装・API連携も担当。Webシステムのフロントエンド開発にも携わりました。",
  },
  {
    startYYYY: "2025",
    startMM: "9",
    company: "造形美術会社",
    occupation: "制作担当",
    detail:
      "イベント等で使用される立体造形の制作及び進行管理や営業（サブ）も担当。プライベートではWebのキャッチアップを並行しており、Web制作への復帰に向けて学習を続けています。",
  },
];

export default function Career() {
  return (
    <section className={styles.career}>
      <Heading>career</Heading>
      <ol className={styles.list}>
        {data.map((career, index) => (
          <li className={styles.listItem} key={index}>
            <div className={styles.period}>
              <time dateTime={`${career.startYYYY}-${career.startMM}`}>
                {career.startYYYY}.{career.startMM}
              </time>
              &nbsp;-&nbsp;
              {career.endYYYY ? (
                <time dateTime={`${career.endYYYY}-${career.endMM}`}>
                  {career.endYYYY}.{career.endMM}
                </time>
              ) : (
                <span>現在</span>
              )}
            </div>
            <p className={styles.company}>{career.company}</p>
            <div className={styles.content}>
              <span className={styles.occupation}>{career.occupation}</span>
              <p className={styles.detail}>{career.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
