/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_TEST === '1'
    ? {
        /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
        webpack: (config: any) => {
          config.module.rules.push({
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['next/babel'],
                plugins: [
                  [
                    'istanbul',
                    {
                      exclude: ['**/*.cy.tsx'],
                    },
                  ],
                ],
              },
            },
          });
          return config;
        },
      }
    : {}),
};

export default nextConfig;
