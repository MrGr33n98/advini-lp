/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Boa prÃ¡tica
    images: {
        domains: ['images.unsplash.com', 'randomuser.me', 'via.placeholder.com'], // Adicionado placeholder.com
    },
}

module.exports = nextConfig
