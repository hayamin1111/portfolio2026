import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/_types/works";

interface Props { 
  contents: Work[];
}

export default function Card({ contents }: Props) {
  return (
    <>
      {
        // contentsがなければarticleは表示させない
        contents.length === 0 ? (
          <p className={styles.none}>記事が登録されていません。</p>
        ) : (
          <div className={styles.cards}>
            {
              contents.map(card => (
                <article key={card.id} className={styles.card}>
                  <Link href={card.link || `/works/${card.id}`} className={styles.link}>
                    <dl className={styles.content}>
                      <dt className={styles.title}>{card.title}</dt>
                      <dd className={styles.discription}>
                        <p className={styles.summary}>{card.summary}</p>
                        <ul className={styles.tags}>
                          {
                            // techsは重複しないためkeyはel
                            card.techs.map(el => (
                              <li key={el} className={styles.tag}>{el}</li>
                            ))
                          }
                        </ul>
                      </dd>
                      <dd className={styles.image}>
                        <Image 
                          src={card.thumb} alt={card.alt} width={600} height={300}/>
                      </dd>
                    </dl>
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
