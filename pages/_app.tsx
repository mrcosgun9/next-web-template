import '../styles/globals.css'
import "../styles/index.scss"
import type { AppProps } from 'next/app'
import HomeLayout from './layout/HomeLayout'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
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
      <NotificationsProvider position="top-right">
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </NotificationsProvider>
    </MantineProvider>
  )
}
