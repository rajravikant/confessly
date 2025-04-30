import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://api.dicebear.com/9.x/identicon/svg?seed=fd')],
  },
};

export default nextConfig;
