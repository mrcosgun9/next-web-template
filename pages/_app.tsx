import '../styles/globals.css'
import "../styles/index.scss"
import type { AppProps } from 'next/app'
import HomeLayout from './layout/HomeLayout'
import { MantineProvider } from '@mantine/core';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </MantineProvider>
  )
}
