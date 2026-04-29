import Hero from "@/components/hero";
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero
          title="Portfolio 2026"
          subTitle="Hayakawa"
          imageOn
        />
      </MainLayout>
    </>
  );
}
