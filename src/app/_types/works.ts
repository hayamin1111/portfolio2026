export interface Work {
  id: string;
  title: string;
  summary: string;
  techs: string[];
  thumb: string;
  alt: string;
  link: string | null;
}

export interface Works {
  contents: Work[];
}
