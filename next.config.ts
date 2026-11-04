import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true" || process.env.CI === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/omar-alaedin" : undefined,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
