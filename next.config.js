/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader?name=videos/[name].[ext]',
    });

    return config;
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // put other next-pwa options here
});

module.exports = { ...nextConfig, ...withPWA };
