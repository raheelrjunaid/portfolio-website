/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["localhost", "portfolio-webs-backend.herokuapp.com"],
  },
  nextConfig,
};
