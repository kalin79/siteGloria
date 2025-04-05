import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* config options here */
  reactStrictMode: true, // Habilita modo estricto en React
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default nextConfig;
