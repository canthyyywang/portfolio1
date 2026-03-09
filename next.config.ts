import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 启用静态导出
  images: {
    unoptimized: true, // 如果你用了 next/image，需要加上这个
  },
};

export default nextConfig;
