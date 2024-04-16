
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{jsx,js}", flowbite.content()],
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
    flowbite.plugin(),
  ],
};
