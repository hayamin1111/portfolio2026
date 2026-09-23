import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getWorkDetail } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_components/Button";
import ButtonArea from "@/app/_components/ButtonArea";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";
import ExternalIcon from "@/app/_components/icons/ExternalIcon";
import Tags from "@/app/_components/Tags";

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
        <ol className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link href="/works" className={styles.breadcrumbsLink}>
              個人制作を見る
            </Link>
          </li>
          <li className={styles.breadcrumbsItem}>{data.title}</li>
        </ol>
        <h1 className={styles.heading1}>{data.title}</h1>
        <figure className={styles.mv}>
          {data.thumbnail && (
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              loading="eager"
            />
          )}
        </figure>

        {/* 使用技術 */}
        {data.techs && <Tags items={data.techs} />}

        {/* リンク */}
        <ButtonArea className={styles.workLinks}>
          <Button href="https://bookfinder.ehykw.com/" external cta>
            アプリを見る
            <ExternalIcon />
          </Button>
          <Button href="https://github.com/hayamin1111/novel-search-app" external>
            GitHubで見る
            <ExternalIcon />
          </Button>
        </ButtonArea>
        {/* 詳細情報 */}
        {data.detail && (
          <div className={styles.detail}>
            <div dangerouslySetInnerHTML={{ __html: data.detail }} />
          </div>
        )}
      </section>

      <aside>
        <ButtonArea>
          <Button href="/works">
            <ArrowIcon back={true} />
            一覧へ戻る
          </Button>
        </ButtonArea>
      </aside>
    </>
  );
}
