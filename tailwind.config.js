module.exports = {
    purge: {
        content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        screens: {
            'xs': '340px',
            // => @media (min-width: 400px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};