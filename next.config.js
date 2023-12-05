/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['chart.googleapis.com', 'images.unsplash.com']
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
