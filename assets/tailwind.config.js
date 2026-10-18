tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: { light: '#E8CC85', DEFAULT: '#C8A04A', dark: '#94701F' },
        jungle: { 950: '#0D1B13', 900: '#14271C', 800: '#1C3626', 700: '#26472F', 600: '#33603F' },
        parchment: { light: '#FBF6EA', DEFAULT: '#F4EAD3', dark: '#E6D5AE' },
        clay: { DEFAULT: '#A4442A', dark: '#7E321E' },
        lotus: '#E7928E',
        ink: '#2B2116',
      },
      fontFamily: {
        moul: ['Moul', 'serif'],
        khmer: ['"Kantumruy Pro"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', '"Kantumruy Pro"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20,39,28,.35)',
        glow: '0 0 0 1px rgba(200,160,74,.35), 0 18px 40px -18px rgba(200,160,74,.55)',
      },
    },
  },
};
