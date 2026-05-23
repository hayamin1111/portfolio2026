import {getWorkDetail} from "@/app/_libs/microcms"

type Props = {
  //Next.js v15以降は非同期化必要
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = await getWorkDetail(slug);
  return <div>{data.title}</div>;
}
