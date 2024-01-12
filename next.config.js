/** @type {import('next').NextConfig} */

const nextConfig = {
    // reactStrictMode: false,
    swcMinify: true,
    trailingSlash: true,
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["localhost"],
        formats: ["image/avif", "image/webp"],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

module.exports = nextConfig;
