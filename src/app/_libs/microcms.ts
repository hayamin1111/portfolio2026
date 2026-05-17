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

// データ取得
export const getWorksData = async (queries?: MicroCMSQueries) => {
  //getListはMicroCMSListResponse<Work>を返す
  const worksData = await client.getList<Work>({
    endpoint: "works",
    queries,
  });
  return worksData;
};
