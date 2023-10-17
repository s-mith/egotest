/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        leafbrown: '#4a412a',
        leafyellow: '#fffee1',
        leafpink: {
          100: '#FFC9E1',
          500: '#FF70B0',
        },
      },
      screens: {
        'low-width': '943px',
      }
    },

    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    }
  },
  plugins: [
  ],
}