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
  }, 
  env: {
    API:"75.177.177.13",
    CAPI:"leaf.xn--q9jyb4c"
  },
}

module.exports = nextConfig
