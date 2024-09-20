/** @type {import('next').NextConfig} */

const nextConfig = {
    swcMinify: false,
    sassOptions: {
        includePaths: ['./src/app', './src/Styles'],
    },
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
