/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BE_URL: process.env.BE_URL
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/admin/dashboard',
                permanent: true,
            },
            {
                source: '/admin',
                destination: '/admin/dashboard',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
