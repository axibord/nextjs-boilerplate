import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }:any): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
