/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages as a project page, the site is served from
// https://<user>.github.io/<repo>, so we need a base path in production.
const isProd = process.env.NODE_ENV === 'production'
const repoBasePath = '/sim-personal-web'

const nextConfig = {
  output: 'export',
  basePath: isProd ? repoBasePath : '',
  assetPrefix: isProd ? repoBasePath : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
