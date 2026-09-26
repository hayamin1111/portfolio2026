import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getWorkDetail } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_components/Button";
import ButtonArea from "@/app/_components/ButtonArea";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";
import Tags from "@/app/_components/Tags";
import TextLink from "@/app/_components/TextLink";

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
        <div className={styles.headingArea}>
          <h1 className={styles.heading1}>{data.title}</h1>
          {data.siteLink && (
            <TextLink href={data.siteLink} external>
              {data.siteLink}
            </TextLink>
          )}
        </div>
        <figure className={styles.mv}>
          {data.thumbnail && (
            <Image
              src={data.thumbnail.url}
              alt={`${data.title}のスクリーンショット`}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              preload
              loading="eager"
              quality={70}
            />
          )}
        </figure>

        {/* 使用技術 */}
        {data.techs && <Tags items={data.techs} />}

        <div className={styles.detailArea}>
          {/* 詳細情報 */}
          {data.detail && (
            <div className={styles.detail}>
              <div dangerouslySetInnerHTML={{ __html: data.detail }} />
            </div>
          )}

          {/* リンク */}
          {(data.siteLink || data.ghLink) && (
            <ButtonArea className={styles.detailLinks}>
              {data.siteLink && (
                <Button href={data.siteLink} external cta>
                  アプリを見る
                </Button>
              )}
              {data.ghLink && (
                <Button href={data.ghLink} external>
                  GitHubで詳細を見る
                </Button>
              )}
            </ButtonArea>
          )}
        </div>
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
