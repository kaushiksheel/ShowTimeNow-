/** @type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
