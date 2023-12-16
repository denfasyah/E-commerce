/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#db2777",
            
   "secondary": "#00dd00",
            
   "accent": "#008428",
            
   "neutral": "#2d2439",
            
   "base-100": "#fafdf6",
            
   "info": "#00d4ff",
            
   "success": "#21b400",
            
   "warning": "#e11c00",
            
   "error": "#d5002c",
            },
          },
        ],
      },
        
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

