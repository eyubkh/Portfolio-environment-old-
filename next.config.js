/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true,

  }
}

module.exports = nextConfig
