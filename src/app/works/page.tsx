import Hero from "@/app/_components/Hero";
import Card from "@/app/_components/Card";
import {getWorksData} from "@/app/_libs/microcms";

export default async function Page() {
  const worksData = await getWorksData();

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
