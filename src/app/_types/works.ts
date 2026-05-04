export interface Work {
  id: string;
  title: string;
  summary: string;
  techs: string[];
  thumb: string;
  alt: string;
  link: string;
}

export interface Works {
  contents: Work[];
}
