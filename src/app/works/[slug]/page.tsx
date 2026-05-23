  import { notFound } from "next/navigation";
  import {getWorkDetail} from "@/app/_libs/microcms";
  import Image from "next/image";
  import styles from "./page.module.css";

  type Props = {
    //Next.js v15以降は非同期化必要
    params: Promise<{
      slug: string;
    }>;
  };

  export default async function Page({ params }: Props) {
    const { slug } = await params;
    const data = await getWorkDetail(slug).catch(notFound); // slugが存在しない場合は404ページへ遷移
    return (
      <>
        <section>
          {/* メインビジュアル */}
          <h1 className={styles.heading1}>{data.title}</h1>
          <figure className={styles.mv}>
            {data.thumbnail && (
              <Image src={data.thumbnail.url} alt={data.title} width={data.thumbnail.width} height={data.thumbnail.height} />
            )}
          </figure>
          {/* 使用技術 */}
          {data.techs && (
            <ul className={styles.tags}>
              {data.techs.map((tech) => (
                <li key={tech.id}  className={styles.tag}>
                  {tech.name}
                </li>
              ))}
            </ul>
          )}
          <section>
            {/* 詳細情報 */}
            {data.detail && (
              <div className={styles.detail} dangerouslySetInnerHTML={{ __html: data.detail }} />
            )}
          </section>
        </section>
      </>
    );
  }
