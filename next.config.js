const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ROOT: __dirname,
  },
  async headers() {
    return [
      {
        // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
        source: "/:all*(svg|jpg|png|gltf|glb)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
});

module.exports = nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
