import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Work } from "@/app/_types/works";

// 環境変数チェック
if(!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not set");
}
if(!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not set");
}

// クライアント作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 一覧ページ用データ取得
export const getWorks = async (queries?: MicroCMSQueries) => {
  //getListは複数まとめて返す
  const works = await client.getList<Work>({
    endpoint: "works",
    queries,
  });
  return works;
};

// 詳細ページ用データ取得
export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  //getListDetailは1件のみ返す
  const workDetail = await client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
  });
  return workDetail;
};
