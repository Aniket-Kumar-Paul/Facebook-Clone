/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com"
    ]
  }
}

