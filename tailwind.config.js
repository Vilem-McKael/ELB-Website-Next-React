/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('/pebbleBackground.jpeg')",
        'conducting1': "url('/edieImages/2sfh.6.14.13_1991.jpg')",
        'searchlights': "url('/other/searchlights.jpeg')",
        'derutaBg1': "url('/deruta/derutaAncientTileSingle.png')",
        'derutaBg2': "url('/deruta/derutaAncientTileTriple.png')",
        'audioBg': "url('/other/aluminumTexture.jpeg')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'zilla': ['Playfair Display', 'serif'],
        'abril': ['Abril Fatface', 'serif'],
      },
      colors: {
        'light1': '#CED0C2',
        'light2': '#DADDCE',
        'light3': '#DFE1D1',
        'light4': '#D0D1C8',
        'light5': '#D8DACC',
        'light6': '#F1F4E2',
        'light7': '#F8F8F1',
        'light8': '#FBFBF3',
        'light9': '#F4F4EB',
        'teal1': '#45848A',
        'teal2': '#3E8483',
        'teal3': '#6EB7B4',
        'teal4': '#56A29A',
        'darkBlue': '#263053',
        'darkBlue2': '#1A223C',
        'darkBlue3': '#2A3659',
        'darkBlue4': '#2B3D67',
        'indigo1': '#2E254B',
        'blue1': '#526693',
        'lightBlue': '#4CA0BF',
        'green': '#566632',
        'green2': '#5C8E5C',
        'green3': '#3B561E',
        'gold': '#CC9D20',
        'gold2': '#D2912D',
        'gold3': '#CB8F1A',
        'gold4': '#D1A01C',
        'yellow': '#D2AD2B',
        'yellow2': '#D2AD25',
        'yellow3': '#D3AE37',
        'yellow4': '#DAC042',
        'burntOrange1': '#AD4F2D',
        'burntOrange2': '#A6442A',
        'burntOrange3': '#B25533',
        'burntOrange4': '#BB602F',
        'burntOrange5': '#BB6F24',
        'terracotta': '#A34726',
        'terracotta2': '#B55331',
        'terracotta3': '#964124',
        'terracotta4': '#A1432A',
      }
    },
    screens: {
      'mobileLandscape': {'raw' : '(orientation: landscape) and (max-height: 500px) and (max-width: 950px)'},
      'sm': {'raw' : '(min-height: 500px) and (min-width: 640px)'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
