/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuild: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Apply fixes for specific issues like recursive requires
    // Example: Exclude certain modules or adjust configurations
    config.module.rules.push({
      test: /\.js$/,
      resolve: {
        fullySpecified: false,
      },
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
