interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    primary: string
    secondary: string
  }
  space: string[]
  fontWeights: {
    normal: number
    bold: number
  }
  sidebarWidth: string
}

const theme: ThemeShape = {
  breakpoints: ['600px', '900px', '1200px'],
  fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  colors: {
    primary: '#db7436',
    secondary: '#343549',
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: '350px',
}

export default theme
