const path = require('path')
const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
};

module.exports = nextConfig;

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     })
//     return config,
//     i18n
//   },
// }