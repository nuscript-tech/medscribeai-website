/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Enables Cloudflare bindings (env, KV, R2, etc.) during `next dev`.
// Harmless in production builds; only initializes the dev platform locally.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
