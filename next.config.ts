import type { NextConfig } from 'next'

/**
 * Root cause of the crash:
 *
 * Next.js 15.5+ bundles React 19 canary (19.2.0-canary-...) internally in
 * `next/dist/compiled/react`. When a package is added to `optimizePackageImports`,
 * Next.js includes it in `transpilePackages`, which makes webpack apply its
 * `appPagesBrowser` layer rules — including the React module alias that rewrites
 * all `import 'react'` statements to `next/dist/compiled/react` (React 19 canary).
 *
 * @react-three/fiber depends on `react-reconciler@0.27.0`, which accesses
 * `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner`.
 * That internal API was removed in React 19 (replaced by `ReactSharedInternals`).
 *
 * Result: `Cannot read properties of undefined (reading 'ReactCurrentOwner')`.
 *
 * Fix: remove all R3F packages from optimizePackageImports so Next.js does NOT
 * transpile them through its pipeline. They remain as external node_modules and
 * resolve `react` from the real node_modules copy (React 18.3.1), which still
 * has `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner`.
 *
 * Note: `three` stays in transpilePackages for ESM compatibility.
 * Safe to optimize: packages that don't use React internals directly.
 */
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['gsap', 'clsx', 'tailwind-merge'],
  },
  transpilePackages: ['three'],
}

export default nextConfig
