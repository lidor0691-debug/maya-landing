/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return {
      // Serve the static marketing landing at the root. `beforeFiles` runs
      // before filesystem routes, so this wins over any app/ route for `/`.
      beforeFiles: [{ source: '/', destination: '/landing.html' }],
    }
  },
}

module.exports = nextConfig
