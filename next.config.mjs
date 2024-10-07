/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    trailingSlash: true,

    swcMinify: false,
    experimental: {
        cssChunking: 'strict',
        useLightningcss: false,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
