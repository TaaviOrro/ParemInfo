/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'development' ? '' : '/ParemInfo',
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/ParemInfo/',
};

export default nextConfig;
