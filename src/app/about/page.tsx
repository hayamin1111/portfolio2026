import Hero from "@/components/hero";
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero 
          title="About" 
          subTitle="自己紹介" 
        />
      </MainLayout>
    </>
  );
}
