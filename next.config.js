/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {unoptimized: true},
  assetPrefix: 'pf'
}

module.exports = nextConfig
