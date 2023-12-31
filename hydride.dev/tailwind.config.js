/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './mdx-components.jsx'
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
                sans: ['var(--font-golos)', 'Golos Text', 'system-ui', 'sans-serif'],
                rubik: ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
                golos: ['var(--font-golos)', 'Golos Text', 'system-ui', 'sans-serif'],
                inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                spacemono: ['var(--font-spacemono)', 'Space Mono', 'system-ui', 'monospace'],
            },
            colors: {
                "hydride": {
                    "dark": "#191919"
                }
            },
        },
    },
    plugins: [require("daisyui")],
}
