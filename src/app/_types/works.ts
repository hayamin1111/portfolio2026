
import type {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
} from "microcms-js-sdk";

// works型定義
export type WorkCategory = "web" | "app" | "prototype";

export type Tech = {
  id: string;
  name: string;
  slug: string;
} & MicroCMSListContent;

export type Work = MicroCMSListContent & {
  category: WorkCategory[];
  title: string;
  summary: string;
  thumbnail: MicroCMSImage;
  detail?: string;
  techs: Tech[];
  featured: boolean;
  sortOrder: number;
  link?: string;
};

export type Works = MicroCMSListResponse<Work>;
