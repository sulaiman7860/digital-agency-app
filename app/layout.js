import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core"
import { config } from '@fortawesome/fontawesome-svg-core'
import Footer from './(components)/Footer/Footer';
import Script from 'next/script'
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" />

      </body>
    </html>
  )
}
