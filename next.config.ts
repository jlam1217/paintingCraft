import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow remote images from any domain (for future flexibility)
    remotePatterns: [],
    // Images in /public are served at original quality via plain <img> tags.
    // Project photos use <img> directly to avoid Next.js compression.
  },
};

export default nextConfig;
