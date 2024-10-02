import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    ppr: "incremental",
    reactCompiler: true,
  },
};

export default nextConfig;
