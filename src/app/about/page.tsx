import Hero from "@/app/_components/Hero";
import DecoHeaeder from "@/app/_components/Deco";
import Button from "@/app/_components/Button";
import ButtonArea from "@/app/_components/ButtonArea";
import ArrowIcon from "@/app/_components/icons/ArrowIcon";
import Profile from "./_components/Profile";
import Career from "./_components/Career";

export default function Page() {
  return (
    <>
      <DecoHeaeder>About</DecoHeaeder>
      <Hero title="Hayakawaを知る" />
      <Profile />
      <Career />

      <aside>
        <ButtonArea>
          <Button href="/works">
            個人制作を見る
            <ArrowIcon />
          </Button>
        </ButtonArea>
      </aside>
    </>
  );
}
