/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
};

module.exports = nextConfig;
