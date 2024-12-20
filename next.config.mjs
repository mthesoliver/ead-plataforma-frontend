/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    skipTrailingSlashRedirect: true,
    trailingSlash: true,

    swcMinify: false,
    experimental: {
        cssChunking: 'strict',
        useLightningcss: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
