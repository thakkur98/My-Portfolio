import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  devIndicators: {
    buildActivity: false,
  },
};


export default nextConfig;
