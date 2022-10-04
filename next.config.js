/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.destreaming.es', 'assets3.razerzone.com'],
  }
}

module.exports = nextConfig
