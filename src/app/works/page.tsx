import Hero from "@/app/_components/Hero";
import Card from "@/app/_components/Card";
import {data} from "@/app/_libs/microcms";

export default function Page() {
  return (
    <>
      <Hero 
        title="Works" 
        subTitle="個人制作を見る" 
      />
      <section>
        <h2>Webサイト</h2>
        <Card contents={data.contents}/>
      </section>
      <section>
        <h2>アプリケーション</h2>
        <Card contents={data.contents}/>
      </section>
      <section>
        <h2>試作</h2>
        <Card contents={data.contents}/>
      </section>
    </>
  ); 
}
