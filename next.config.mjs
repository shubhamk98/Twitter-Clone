/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tensorartassets.com",
      },
    ],
  },
};

export default nextConfig;
