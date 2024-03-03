/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com", "f005.backblazeb2.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
