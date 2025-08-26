import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  config: {},
  experimental: {
    turbo: {
      rules: {
        // Configure imports for SVG files
        "**/*.svg": {
          loaders: ["@svgr/webpack"],
        },
      },
    },
  },
};

export default nextConfig;
