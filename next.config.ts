import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Habilita modo estricto en React
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default nextConfig;
