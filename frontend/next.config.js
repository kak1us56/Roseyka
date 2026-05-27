const BACKEND_URL = process.env.BASE_URL || "http://127.0.0.1:8000";

module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ['localhost', 'api'],
        unoptimized: true,
    },

    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: `${BACKEND_URL}/media/:path*`, 
            },
            {
                source: '/api/:path*',
                destination: `${BACKEND_URL}/:path*/`, 
            },
        ];
    },
};
