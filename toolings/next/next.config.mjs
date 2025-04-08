/** @type {import("next").NextConfig} */
export const nextJsConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["@edgarguzman/*"],
};
