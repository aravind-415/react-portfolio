/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /favicon\.ico$/,
      type: "asset/resource",
      generator: {
        filename: "static/[name][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig; // MUST use CommonJS for Webpack
