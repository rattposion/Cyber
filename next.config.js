/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cyber-shop-alpha.vercel.app', 'localhost', 'backcyber-production.up.railway.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyber-shop-alpha.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'backcyber-production.up.railway.app',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? 'https://backcyber-production.up.railway.app/api/:path*'
          : 'http://localhost:3001/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 