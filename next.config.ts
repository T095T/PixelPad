import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizeCss: false,  // Disable Tailwind v4 compiler
  },
};

export default nextConfig;
