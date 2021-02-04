import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    myColorTest: {
      50: '#e6fde2',
      100: '#c2f5ba',
      200: '#9dec91',
      300: '#77e466',
      400: '#52dd3c',
      500: '#38c322',
      600: '#2a9819',
      700: '#1c6c10',
      800: '#0d4206',
      900: '#001800',
    },
  },
}

function MyApp({ Component, pageProps }:any): JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
