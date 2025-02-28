import i18n from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  i18n: i18n.i18n,
  images: {
    domains: ["example.com"],
    formats: ["image/webp"],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
