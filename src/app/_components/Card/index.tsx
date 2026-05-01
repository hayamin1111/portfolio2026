import styles from "./index.module.css";
import Link from "next/link";

interface Card {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  thumb: string;
  link: string;
}
interface Props { contents: Card[], }

const data: Props = {
  contents: [
    {
      id: "1",
      title: "作ったものタイトル",
      summary: "要約が入ります要約が入ります要約が入ります要約が入ります",
      tech: ["JS", "EJS", "xxx"],        
      thumb: "https://placehold.jp/600x300.png",
      link: "xxx",
    },
    {
      id: "2",
      title: "作ったものタイトル2",
      summary: "要約が入ります要約が入ります要約が入ります要約が入ります2",
      tech: ["TS", "PUG", "xxx"],        
      thumb: "https://placehold.jp/700x300.png",
      link: "xxx",
    },
  ]
}

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        {
          data.contents.map(card => (
            <article key={card.id} className={styles.article}>
              <Link href={card.link}>
                <h2 className={styles.title}>{card.title}</h2>
                <div className={styles.summary}>
                  <p>{card.summary}</p>
                </div>
                <ul>
                  {
                    card.tech.map(el => (
                      <li key={el}>{el}</li>
                    ))
                  }
                </ul>
              </Link>
            </article>
          ))
        }
      </div>
    </>
  )
}
