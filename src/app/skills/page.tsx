import Hero from "@/components/hero";
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero
          title="Skills"
          subTitle="スキル紹介のサブタイトル"
        />
      </MainLayout>
    </>
  );
}
