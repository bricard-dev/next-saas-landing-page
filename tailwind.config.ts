import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '80px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
