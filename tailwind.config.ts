/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    
    darkMode: "class", 
    
    theme: {
        extend: {
            colors: {
                "primary": "#2563EB",
                "background-light": "#000000",
                "background-dark": "#101922",
            },
            
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
    safelist: [
        'bg-background-light',
        'bg-background-dark'
    ],
}