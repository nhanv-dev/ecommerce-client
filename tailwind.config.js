/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1300px',
        },
        colors: {
            'primary': '#D0011B',
            'primary-hover': '#D0011B',
            'black': '#333',
            'black-1': '#3f4b53',
            'white': '#fff',
            'gray': '#666',
            'border': '#dcdee3',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontSize: {
            'xs': '.775rem',
            'sm': '.8rem',
            'tiny': '.875rem',
            'md': '.9rem',
            'base': '1rem',
            'lg': '1.1rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1300px',
            },
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'tiny': '0 -2px 8px 0 rgb(0 0 0 / 10%), 0 4px 8px 0 rgb(0 0 0 / 10%)'
            },
            backgroundImage: {
                'login-page': "url('https://auth.services.adobe.com/img/canvas/Fotolia_241479172_XL.jpg')",
                'voucher': 'linear-gradient(to bottom right,#72d5d7,#11a7a9)',
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}