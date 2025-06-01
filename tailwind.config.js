// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        jump: 'jump 1s ease-in-out infinite',
      },
    },
  },
}
