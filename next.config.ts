import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /products and /about were folded into the homepage. Anything still
  // pointing at them (App Store listings, old posts) lands on / instead of a 404.
  async redirects() {
    return [
      { source: "/products", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
