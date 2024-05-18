/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
        );
        return config;
    },
    images: {
        domains: ['vip.helloimg.com'],
    },
};

export default nextConfig;
