type HeroProps = {
  title?: string;
  subTitle?: string;
  imageOn?: boolean;
};

export default function Hero({
  title = "デフォルトタイトル",
  subTitle = "デフォルトサブタイトル",
  imageOn = false,
}: HeroProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
