/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.destreaming.es', 'assets3.razerzone.com', 'localhost'],
  }
}

module.exports = nextConfig
