import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/_types/works";
import Tags from "@/app/_components/Tags";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";

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
            {contents.map((card) => (
              <article key={card.id} className={styles.card}>
                <Link href={card.link ?? `/works/${card.id}`} className={styles.link}>
                  <dl className={styles.content}>
                    <div className={styles.detail}>
                      <dt className={styles.title}>{card.title}</dt>
                      <dd className={styles.description}>
                        <p className={styles.summary}>{card.summary}</p>
                        <Tags items={card.techs} />
                      </dd>
                      <dd className={styles.toDetail}>
                        詳細を見る
                        <ArrowIcon />
                      </dd>
                    </div>
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
            ))}
          </div>
        )
      }
    </>
  );
}
