import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['qiita-user-contents.imgix.net'],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
