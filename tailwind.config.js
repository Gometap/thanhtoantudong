/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ring-ring': 'ring-ring 2s infinite',
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'ring-ring': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)' },
          '70%': { transform: 'scale(1.1)', boxShadow: '0 0 0 15px rgba(37, 99, 235, 0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
};
