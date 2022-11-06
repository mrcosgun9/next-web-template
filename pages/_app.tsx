import '../styles/globals.css'
import "../styles/index.scss"
import type { AppProps } from 'next/app'
import HomeLayout from './layout/HomeLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}
