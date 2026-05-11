/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['gsap', 'clsx', 'tailwind-merge'],
  },
  transpilePackages: ['three'],
}

export default nextConfig
