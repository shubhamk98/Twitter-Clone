/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "image.tensorartassets.com",
      },
      {
        hostname: "twitter-dev-101.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
// "lh3.googleusercontent.com",
//       "image.tensorartassets.com",
//       "twitter-dev-101.s3.ap-south-1.amazonaws.com",
