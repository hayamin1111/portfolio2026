import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp', // 許可するドメイン
        port: '',
        pathname: '/**', // 全てのパスを許可
      },
    ],
  }
};

export default nextConfig;
