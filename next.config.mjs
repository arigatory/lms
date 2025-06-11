/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://i.pravatar.cc/**')],
  },
};

export default nextConfig;
