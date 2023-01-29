import './globals.css'
import { IBM_Plex_Mono, Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'optional'
})

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`scroll-smooth ${roboto.variable} ${ibm_plex_mono.variable}`}>

      <head />

      <body>{children}</body>
    </html>
  )
}
