/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 