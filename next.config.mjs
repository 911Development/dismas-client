import i18n from "./next-i18next.config.js";
const nextConfig = {
  images: {
    domains: ["api.microlink.io", "example.com"],
    formats: ["image/webp"],
  },
  i18n: i18n.i18n,
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
