/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/runtime': '@splinetool/runtime',
    };
    return config;
  },
  images: {
    domains: ['my.spline.design'],
  },
}

module.exports = nextConfig; 