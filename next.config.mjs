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
};

export default nextConfig;
