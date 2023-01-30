/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.destreaming.es', 'assets3.razerzone.com', '52.87.72.9'],
  }
}

module.exports = nextConfig
