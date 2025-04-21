/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // blue-500
        success: '#10b981',    // emerald-500
        warning: '#f59e0b',    // amber-500
        error: '#ef4444',      // red-500
      },
    },
  },
  plugins: [],
};
