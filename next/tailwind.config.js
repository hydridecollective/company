/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                "hydride": {
                    "dark": "#191919"
                }
            },
        },
    },
    plugins: [],
}
