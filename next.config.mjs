/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    swcMinifyFallback: false,
    sassOptions: {
        includePaths: ['./src/Styles'],
    },
};

export default nextConfig;
