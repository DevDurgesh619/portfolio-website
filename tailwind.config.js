module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        '300': '300%',
      },
      animation: {
        gradient: 'gradient 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
