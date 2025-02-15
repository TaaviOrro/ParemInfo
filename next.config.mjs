/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/ParemInfo',
    assetPrefix: '/ParemInfo/',
};

export default nextConfig;
