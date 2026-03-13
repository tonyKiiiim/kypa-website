import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 1000,
  },
  images: {
    domains: [],
  },
  videos: {
    doamins: [],
  }
};

export default nextConfig;
