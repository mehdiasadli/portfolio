/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-l': '#46FFF0',
        primary: '#00C6B6',
        'primary-d': '#005C55',
        'accent-l': '#FFFEA3',
        accent: '#F9F871',
        'accent-d': '#FFFD0F',
        'background-l': '#31353C',
        background: '#282C34',
        'background-d': '#21252A',
        'text-l': '#F0F0F0',
        'text-d': '#21252A'
      }
    }
  },
  plugins: []
}
