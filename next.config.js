/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
