import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/_types/works";

interface CardProps { 
  contents: Work[];
}

export default function Card({ contents }: CardProps) {
  return (
    <>
      {
        // contentsがなければarticleは表示させない
        contents.length === 0 ? (
          <p className={styles.none}>記事が登録されていません。</p>
        ) : (
          <div className={styles.card}>
            {
              contents.map(card => (
                <article key={card.id} className={styles.article}>
                  <Link href={card.link}>
                    <h2 className={styles.title}>{card.title}</h2>
                    <div className={styles.summary}>
                      <p>{card.summary}</p>
                    </div>
                    <ul>
                      {
                        // techsは重複しないためkeyはelでok
                        card.techs.map(el => (
                          <li key={el}>{el}</li>
                        ))
                      }
                    </ul>
                    <Image 
                      src={card.thumb} alt={card.alt} width={300} height={200} />
                  </Link>
                </article>
              ))
            }
          </div>
        )
      }
    </>
  )
}
