import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        accent: '#f59e0b',
        dark: '#1f2937',
        light: '#f9fafb'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' }
        },
        slideIn: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
} satisfies Config