import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (<ThemeProvider attribute='class'>
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-12 rounded-2xl dark:shadow-custom-dark dark:bg-dark-500">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  </ThemeProvider>)

}
