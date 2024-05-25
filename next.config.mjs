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
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vip.helloimg.com',
          },
          {
            protocol: 'https',
            hostname: 'q1.qlogo.cn',
          },
          {
            protocol: 'https',
            hostname: 'wakatime.com',
          },
        ],
      },
      async redirects() {
        return [
          {
            source: '/admin',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
