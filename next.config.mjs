/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    sassOptions: {
        includePaths: ['./src/Styles'],
    },
};

export default nextConfig;
