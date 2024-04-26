const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // assetPrefix: isProd ? "/dist" : undefined,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // skip lint for build:watch
  },
  // trailingSlash: true,
  // i18n: {
  //   locales: ["en-US", "fr", "nl-NL"],
  //   defaultLocale: "en-US",
  // },
};

module.exports = nextConfig;
