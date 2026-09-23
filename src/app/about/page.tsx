import Hero from "@/app/_components/Hero";
// import styles from "./page.module.css";
import DecoHeaeder from "@/app/_components/Deco";
import Profile from "./_components/Profile";
import Career from "./_components/Career";
// import Skills from "./_components/Skills";
// import Values from "./_components/Values";

export default function Page() {
  return (
    <>
      <DecoHeaeder>About</DecoHeaeder>
      <Hero title="Hayakawaを知る" />
      <Profile />
      <Career />
      {/* <Skills /> */}
    </>
  );
}
