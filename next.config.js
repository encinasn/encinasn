/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.pando.ar"],
  },
};

module.exports = nextConfig;
