import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        banner: 'url("/images/banner.png")',
      },
      colors: {
        blue: {
          50: '#E5F4FD',
          100: '#F0F8FE',
          200: '#5EB9F0',
        },
        gray: {
          100: '#343F52',
          50: '#60697B',
        },
      },
    },
  },
  plugins: [],
};
export default config;
