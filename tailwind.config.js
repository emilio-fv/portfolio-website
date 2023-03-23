/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': '90vh',
      },
      colors: {
        'white': '#ffff',
        'accent-light': '#00a8e8',
        'accent-medium': '#007ea7',
        'accent-dark': '#00171f',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
