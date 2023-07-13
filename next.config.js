const path = require('path');

// next.config.js

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/assets/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
