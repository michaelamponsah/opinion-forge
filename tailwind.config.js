/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'custom-purple': '#ad1fea',
      'custom-dark-blue-50': '#647196',
      'custom-dark-blue-100': '#3a4374',
      'custom-dark-blue-200': '#4661e6',
      'custom-light-50': '#ffffff',
      'custom-light-100': '#f2f4ff',
      'custom-light-150': '#f7f8fd',
      'custom-warning-50': '#f49f85',
      'custom-warning-100': '#d73737',
      'custom-sea-blue': '#62bcfa',
    },
  },
  plugins: [],
};
