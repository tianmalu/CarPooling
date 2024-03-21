module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      height: {
        '512': '150rem',
        '256': '120rem',
        '128': '45rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
