/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization if not needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /favicon\.ico$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[name][ext]', // Output favicon without processing
      },
    });
    return config;
  },
};

export default nextConfig;