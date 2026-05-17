import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/_types/works";
import styles from "./index.module.css";

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
                  <Link href={card.link ?? `/works/${card.slug}`} className={styles.link}>
                    <dl className={styles.content}>
                      <dt className={styles.title}>{card.title}</dt>
                      <dd className={styles.description}>
                        <p className={styles.summary}>{card.summary}</p>
                        <ul className={styles.tags}>
                          {card.techs.map((tech) => (
                            <li key={tech.id} className={styles.tag}>
                              {tech.name}
                            </li>
                          ))}
                        </ul>
                      </dd>
                      <dd className={styles.image}>
                        {card.thumbnail && (
                          <Image
                            src={card.thumbnail.url}
                            alt={card.thumbnail.alt ?? card.title}
                            width={card.thumbnail.width}
                            height={card.thumbnail.height}
                          />
                        )}
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
