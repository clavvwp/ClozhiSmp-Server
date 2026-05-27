/** @type {import('next').NextConfig} */

// ============================================
// NEXT.JS CONFIGURATION
// Change 'clozhi-smp' to your GitHub repo name
// if deploying to GitHub Pages
// ============================================

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Static export — required for GitHub Pages
  output: 'export',

  // If deploying to https://yourusername.github.io/clozhi-smp/
  // set basePath to '/clozhi-smp'
  // If deploying to a custom domain, remove basePath entirely
  // basePath: isProd ? '/clozhi-smp' : '',

  // Required for static image optimization with export
  images: {
    unoptimized: true,
  },

  // Trailing slash helps with static hosting routing
  trailingSlash: true,
};

module.exports = nextConfig;
