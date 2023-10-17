/** @type {import('next').NextConfig} */

// 
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/todo',
        destination: '/todo/tasks',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
