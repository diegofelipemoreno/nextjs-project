/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'rickandmortyapi.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/episode',
        destination: '/episode/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
