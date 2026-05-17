import type { Works } from "@/app/_types/works";

export const data: Works = {
  // 仮データ
  contents: [
    {
      id: "1",
      title: "作ったものタイトル",
      summary: "要約が入ります要約が入ります要約が入ります要約が入ります",
      techs: ["JS", "EJS", "xxx"],        
      thumb: "https://placehold.jp/600x300.png",
      alt: "画像説明文",
      link: "",
    },
    {
      id: "2",
      title: "作ったものタイトル2",
      summary: "要約が入ります要約が入ります要約が入ります要約が入ります2",
      techs: ["TS", "PUG", "xxx"],        
      thumb: "https://placehold.jp/600x300.png",
      alt: "画像説明文",
      link: "xxx",
    },
    {
      id: "3",
      title: "作ったものタイトル3",
      summary: "要約が入ります要約が入ります要約が入ります要約が入ります3要約が入ります要約が入ります要約が入ります要約が入ります3",
      techs: ["JS", "Twig", "yyyyyyyy"],        
      thumb: "https://placehold.jp/600x300.png",
      alt: "画像説明文",
      link: null,
    },
  ]
};
