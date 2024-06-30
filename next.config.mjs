/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "image.tensorartassets.com",
      "twitter-dev-101.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
