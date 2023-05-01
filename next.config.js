/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["d1dsr05o5i286u.cloudfront.net", "d1tftw9jjs9bx5.cloudfront.net"],
  },
};

module.exports = nextConfig;
