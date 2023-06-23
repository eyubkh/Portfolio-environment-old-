import '../styles/globals.css'
import '../styles/curriculum.css'
import '../styles/readme.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/sysfont.woff2',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/w95fa.woff2',
      weight: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
