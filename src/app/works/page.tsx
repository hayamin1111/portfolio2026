import Hero from "@/app/_components/Hero";
import Card from "@/app/_components/Card";
import {data} from "@/app/_libs/microsms";

export default function Page() {
  return (
    <>
      <Hero 
        title="Works" 
        subTitle="個人制作" 
      />
      <section>
        <h2>Webサイト</h2>
        <Card contents={data.contents}/>
      </section>
      <section>
        <h2>API連携</h2>
        <Card contents={data.contents}/>
      </section>
      <section>
        <h2>試作</h2>
        <section>
          <h3>UI</h3>
          <Card contents={data.contents}/>
        </section>
      </section>
    </>
  ); 
}
