import Hero from '@/components/hero';
import MainLayout from '@/components/layout/mainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero 
          title="Works" 
          subTitle="個人制作物" 
        />
      </MainLayout>
    </>
  ); 
}
