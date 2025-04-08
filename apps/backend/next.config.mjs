import { nextJsConfig } from "@edgarguzman/next";

/** @type {import("next").NextConfig} */
const nextConfig = {
  ...nextJsConfig,
  async rewrites() {
    return [
      {
        source: "/static/:path*",
        destination: "/not-found",
      },
    ];
  },
};

export default nextConfig;
