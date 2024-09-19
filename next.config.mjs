/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    cssModules: true,
    sassOptions: {
        includePaths: ['./styles'],
    },

};

export default nextConfig;
