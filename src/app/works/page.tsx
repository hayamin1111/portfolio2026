import styles from "./page.module.css";
import Hero from "@/app/_components/Hero";
import Card from "@/app/_components/Card";
import DecoHeaeder from "@/app/_components/Deco";
import Heading from "@/app/_components/Heading";
import Button from "@/app/_components/Button";
import ButtonArea from "@/app/_components/ButtonArea";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";
import { getWorks } from "@/app/_libs/microcms";
import { WORKS_DATA_LIMIT, WORKS_LIST_FIELDS, WORKS_ORDERS } from "@/app/_constants";

// 生成から60秒経過後のアクセスで、ページを再生成する
export const revalidate = 180;

export default async function Page() {
  const worksData = await getWorks({
    limit: WORKS_DATA_LIMIT,
    fields: WORKS_LIST_FIELDS,
    orders: WORKS_ORDERS,
  });

  //section分け
  const appWorks = worksData.contents.filter((work) => work.category.includes("app"));
  const webWorks = worksData.contents.filter((work) => work.category.includes("web"));
  const prototypeWorks = worksData.contents.filter((work) => work.category.includes("prototype"));

  return (
    <>
      <DecoHeaeder>Works</DecoHeaeder>
      <Hero title="個人制作を見る" />

      <section className={styles.worksWrapper}>
        <Heading>アプリケーション</Heading>
        <Card contents={appWorks} />
      </section>

      <section className={styles.worksWrapper}>
        <Heading>Webサイト</Heading>
        <Card contents={webWorks} />
      </section>

      <section className={styles.worksWrapper}>
        <Heading>試作</Heading>
        <Card contents={prototypeWorks} />
      </section>

      <aside>
        <ButtonArea>
          <Button href="/about">
            Hayakawaを知る
            <ArrowIcon />
          </Button>
        </ButtonArea>
      </aside>
    </>
  );
}
