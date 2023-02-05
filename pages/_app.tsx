

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@/styles/globals.scss'
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

import Layout from '@/layouts/_layout';

export default function App({ Component, pageProps }: AppProps) {
  return (<ThemeProvider attribute='class'>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </ThemeProvider>)

}
