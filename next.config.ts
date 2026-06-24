import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ec4you.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
