import styles from "./index.module.css";
import Heading from "@/app/_components/Heading";

interface Career {
  startYYYY: string;
  startMM: string;
  endYYYY?: string;
  endMM?: string;
  company: string;
  occupation: string;
  details: string[];
}

const data: Career[] = [
  {
    startYYYY: "2019",
    startMM: "10",
    endYYYY: "2024",
    endMM: "2",
    company: "Web制作会社",
    occupation: "HTMLコーダー",
    details: [
      "静的サイト制作やWebデザイン、CMSの更新・運用を中心に担当。マークアップやスタイリング、進行管理、見積もり作成など広く経験を積みました。",
    ],
  },
  {
    startYYYY: "2024",
    startMM: "3",
    endYYYY: "2025",
    endMM: "9",
    company: "Web制作会社",
    occupation: "マークアップエンジニア",
    details: [
      "マークアップをメインに、CMS構築やTypeScriptを用いたUI実装を担当。WebシステムのAPI連携や機能実装などフロントエンド開発にも携わりました。",
    ],
  },
  {
    startYYYY: "2025",
    startMM: "9",
    company: "造形美術会社",
    occupation: "製作担当",
    details: [
      "イベント等で使用される立体造形の製作を中心に、顧客対応、図面・仕様提案、納品・施工などを担当。",
      "またWeb制作への復帰に向け、React / Next.jsを用いた個人開発などを通じてキャッチアップを継続しています。",
    ],
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
              {career.details.map((paragraph, index) => (
                <p key={index} className={styles.detail}>
                  {paragraph}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
