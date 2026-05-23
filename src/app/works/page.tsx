import Hero from "@/app/_components/Hero";
import Card from "@/app/_components/Card";
import {getWorks} from "@/app/_libs/microcms";
import {WORKS_DATA_LIMIT, WORKS_LIST_FIELDS, WORKS_ORDERS} from "@/app/_constants"

export default async function Page() {
  const worksData = await getWorks({ 
    limit: WORKS_DATA_LIMIT,
    fields: WORKS_LIST_FIELDS,
    orders: WORKS_ORDERS,
   });

  //section分け
  const webWorks = worksData.contents.filter((work) => work.category.includes("web"));
  const appWorks = worksData.contents.filter((work) => work.category.includes("app"));
  const prototypeWorks = worksData.contents.filter((work) => work.category.includes("prototype"));

  return (
    <>
      <Hero 
        title="Works" 
        subTitle="個人制作を見る" 
      />
      <section>
        <h2>Webサイト</h2>
        <Card contents={webWorks} />
      </section>

      <section>
        <h2>アプリケーション</h2>
        <Card contents={appWorks} />
      </section>

      <section>
        <h2>試作</h2>
        <Card contents={prototypeWorks} />
      </section>
    </>
  ); 
}
