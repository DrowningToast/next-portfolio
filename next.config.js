const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ROOT: __dirname,
  },
  images: {
    domains: ["localhost", "https://gus-api-blog-cms.herokuapp.com"],
  },
  output: "standalone",
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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
});

module.exports = nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
