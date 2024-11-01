/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: '/ucred/**',
        port: '',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
