/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#10251c',
          card: '#19342a',
          border: '#2c4b3f',
          accent: '#b8d8c6',
          muted: '#9fb1a7',
          light: '#e0f1e8',
        },
        halal: {
          green: '#1f7a57',
          'green-deep': '#123b2b',
          'green-soft': '#e8f4ee',
          blue: '#416c98',
          'blue-soft': '#edf3f8',
          purple: '#745ba7',
          'purple-soft': '#f1eef8',
          orange: '#a96d1f',
          'orange-soft': '#fbf2e4',
          red: '#a84848',
          'red-soft': '#fbecec',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f8faf9',
          muted: '#f4f7f5',
          border: '#e3e9e5',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 28px rgba(28, 42, 34, 0.025)',
        elevated: '0 14px 40px rgba(25, 40, 31, 0.06)',
      }
    },
  },
  plugins: [],
}
