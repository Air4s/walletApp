/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'authBackground': 'url(\'/src/assets/mainbg.jpg\')',
      },
    },
  },

  plugins: [
    // Add any Tailwind CSS plugins here
  ],
}
