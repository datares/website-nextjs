/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.medium.com',
        port: '',
        pathname: '/max/**'
      },
    ],
  },
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //       port: '',
  //       pathname: '/**'
  //     },
  //   ],
  // },
  // images: { https://avatars.githubusercontent.com/u/69370385?v=4
  //   domains: ['miro.medium.com']
  // }
}

module.exports = nextConfig
